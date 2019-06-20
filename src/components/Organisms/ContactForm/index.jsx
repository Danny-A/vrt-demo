import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import regularExpressions from 'components/Utils/Validation/validator';

import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';
import Heading from 'components/Atoms/Heading';
import Rte from 'components/Atoms/Text/Rte';
import Button from 'components/Atoms/Button';
import InputText from 'components/Atoms/FormFields/InputText';
import InputTextarea from 'components/Atoms/FormFields/InputTextarea';

import './ContactForm.scss';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    const {
      defaultContactData,
    } = this.props;

    this.state = {
      form: {
        name: '',
        emailaddress: 'email',
        message: '',
        sector: defaultContactData.id,
        honeypot: '',
      },
      errors: null,
      isSubmitting: false,
      formIsValid: false,
      formIsSent: false,
      sectorsState: {
        sectorId: defaultContactData.id,
        sectorName: defaultContactData.sectorName,
        sectorEmailaddress: defaultContactData.emailAddress,
        sectorPhoneNumber: defaultContactData.phoneNumber,
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      id,
      apiUrl,
      token,
    } = this.props;

    const {
      form,
      formIsValid,
      isSubmitting,
    } = this.state;

    if (formIsValid && !isSubmitting) {
      // Set submitting state
      this.setState({
        isSubmitting: true,
      });

      /*
       * Submit the data, we don't submit where the email goes to
       * this is based on the sectorID we send to back-end.
       * We also provide the Verfication token.
       */
      fetch(apiUrl, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          RequestVerificationToken: token,
        },
        body: JSON.stringify({
          formId: id,
          name: form.name,
          message: form.message,
          emailaddress: form.emailaddress,
          sectorId: form.sector,
          honeypot: form.honeypot,
        }),
      }).then((response) => {
        if (response.ok) {
          // Set form state
          this.setState({
            formIsSent: true,
          });

          return response.text();
        }

        // Set submitting state back to false,
        // it is ok if a new submit can be done
        this.setState({
          isSubmitting: false,
        });

        throw new Error('Network response was not ok.');
      }, (error) => {
        console.log(error.message);
      });
    } else {
      this.validateEmail(form.emailaddress);
    }
  }

  /*
   * Validate email based on a RegEx, if this is false,
   * add error to state to display this.
   * If this is true, clear existing errors and mark form as valid.
   */
  validateEmail = (field) => {
    const {
      emailErrorMessage,
    } = this.props;

    if (!regularExpressions.email.test(field)) {
      this.setState({
        errors: emailErrorMessage,
      });
    } else {
      this.setState({
        errors: null,
        formIsValid: true,
      });
    }
  }

  toggleList = () => {
    this.setState(prevState => ({
      showList: !prevState.showList,
    }));
  }

  /*
   * Retrieve fields, fill form object with keys from dynamic field names,
   * validate email field against current input.
   * Update state with new input
   */
  handleChange(e, fieldName) {
    const fieldValue = e.target.value.trim();
    const {
      form,
    } = this.state;

    if (fieldName === 'emailaddress') {
      this.validateEmail(fieldValue);
    }

    this.setState({
      form: {
        ...form,
        [fieldName]: fieldValue,
      },
    });
  }

  /*
   *There is a default sector passed to state,
   * if this sector changes by the user, update this state.
   * Also pass the sector ID to the form body so back-end
   * knows where to send the email to.
   */
  updateSector(fieldName, sector) {
    const {
      form,
    } = this.state;

    this.setState({
      form: {
        ...form,
        [fieldName]: sector.id,
      },
      sectorsState: {
        sectorId: sector.id,
        sectorName: sector.sectorName,
        sectorEmailaddress: sector.emailAddress,
        sectorPhoneNumber: sector.phoneNumber,
      },
    });

    // close list
    this.toggleList();
  }

  render() {
    const {
      heading,
      sectorTitle,
      phoneTitle,
      emailTitle,
      nameField,
      emailField,
      messageField,
      sendButtonText,
      successMessage,
      errorMessage,
      sectors,
    } = this.props;

    const {
      showList,
      name,
      emailaddress,
      message,
      isSubmitting,
      formIsSent,
      errors,
      sectorsState,
    } = this.state;

    return (
      <Theme theme="white">
        <Layer size="huge-header">
          <Retain>
            <form onSubmit={this.handleSubmit}>
              <div className="o-layout o-layout--gutter">
                <div className="o-layout__cell u-fraction--5of12@desk">
                  {heading && (
                    <Heading
                      level={1}
                      stylingLevel={0}
                      text={heading}
                      className="u-mb--large"
                    />
                  )}
                </div>
                <div className="o-layout__cell u-fraction--6of12@desk">
                  <div className="o-layout o-layout--gutter-small u-mb--huge">
                    <div className="o-layout__cell u-fraction--12of12@desk">
                      <div className="o-layout o-layout--gutter-tiny">
                        <div className="o-layout__cell u-fraction--6of12@desk">
                          <div className="u-mb">
                            <Rte richText={phoneTitle} modifier="description" className="u-mb--tiny" />
                            <a href={`tel://${sectorsState.sectorPhoneNumber}`}>{sectorsState.sectorPhoneNumber}</a>
                          </div>
                        </div>
                        <div className="o-layout__cell u-fraction--6of12@desk">
                          <div className="u-mb">
                            <Rte richText={emailTitle} modifier="description" className="u-mb--tiny" />
                            <a href={`mailto:${sectorsState.sectorEmailaddress}`}>{sectorsState.sectorEmailaddress}</a>
                          </div>
                        </div>
                      </div>
                      <div className="o-layout__cell u-fraction--6of12@desk">
                        <div className="u-mb">
                          <Rte richText={sectorTitle} modifier="description" className="u-mb--tiny" />
                          <div className="c-contact-filter__wrap-toggle">
                            <Button
                              tag="button"
                              modifier="clean"
                              icon="icon-dropdown"
                              text={sectorsState.sectorName}
                              onClick={this.toggleList}
                              iconRotate={showList ? 180 : 0}
                            />
                          </div>
                          <ul
                            ref={(e) => { this.listItems = e; }}
                            className={classNames('c-contact-filter__wrap-list o-list-clean', {
                              'is-active': showList,
                            })}
                          >
                            {sectors.map(sector => (
                              <li key={sector.id}>
                                <Button
                                  tag="button"
                                  modifier="clean"
                                  text={sector.sectorName}
                                  onClick={() => { this.updateSector('sector', sector); }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="o-layout o-layout--gutter-tiny">
                    <div className="o-layout__cell u-fraction--6of12@desk">
                      <InputText
                        name={nameField.value}
                        placeholder={nameField.value}
                        value={name}
                        onChange={(e) => { this.handleChange(e, 'name'); }}
                      />
                    </div>
                    <div className="o-layout__cell u-fraction--6of12@desk">
                      <InputText
                        name={emailField.value}
                        placeholder={emailField.value}
                        value={emailaddress}
                        onChange={(e) => { this.handleChange(e, 'emailaddress'); }}
                        errorMessage={errors}
                      />
                    </div>
                  </div>
                  <div className="o-layout">
                    <div className="o-layout__cell">
                      <InputTextarea
                        name={messageField.value}
                        placeholder={messageField.value}
                        value={message}
                        onChange={(e) => { this.handleChange(e, 'message'); }}
                      />
                    </div>
                    <div className="o-layout__cell">
                      <div className="u-display-none">
                        <InputText
                          name="WAYtrickery"
                          placeholder="WAYtrickery"
                          onChange={(e) => { this.handleChange(e, 'honeypot'); }}
                        />
                      </div>
                      <CSSTransition
                        in={formIsSent}
                        timeout={500}
                        classNames="c-contact-submit"
                      >
                        {!formIsSent ? (
                          <Fragment>
                            <Button
                              tag="button"
                              type="submit"
                              text={sendButtonText}
                              modifier="primary"
                              disabled={isSubmitting}
                            />
                            <Rte field={{ value: errorMessage }} />
                          </Fragment>
                        ) : (
                          <Button
                            tag="button"
                            text={successMessage}
                            modifier="is-sent"
                            icon="icon-checkmark"
                            reversed
                          />
                        )}
                      </CSSTransition>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Retain>
        </Layer>
      </Theme>
    );
  }
}

ContactForm.propTypes = {
  id: PropTypes.string,
  token: PropTypes.string,
  sectors: PropTypes.arrayOf(PropTypes.any),
  defaultContactData: PropTypes.objectOf(PropTypes.any),
  heading: PropTypes.objectOf(PropTypes.string),
  sectorTitle: PropTypes.objectOf(PropTypes.string),
  phoneTitle: PropTypes.objectOf(PropTypes.string),
  emailTitle: PropTypes.objectOf(PropTypes.string),
  nameField: PropTypes.objectOf(PropTypes.string),
  emailField: PropTypes.objectOf(PropTypes.string),
  messageField: PropTypes.objectOf(PropTypes.string),
  sendButtonText: PropTypes.string,
  emailErrorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  apiUrl: PropTypes.string,
};

ContactForm.defaultProps = {
  id: null,
  token: null,
  sectors: [],
  defaultContactData: {},
  heading: {},
  sectorTitle: {},
  phoneTitle: {},
  emailTitle: {},
  nameField: {},
  emailField: {},
  messageField: {},
  sendButtonText: 'Versturen',
  emailErrorMessage: 'Vul een geldig e-mailadres in',
  successMessage: '',
  errorMessage: '',
  apiUrl: null,
};

export default ContactForm;

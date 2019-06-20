import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import navigationData from 'components/Organisms/Navigation/data';
import homepageData from 'components/Organisms/HomeAnimation/data';
import pageHeaderData from 'components/Molecules/PageHeader/data';
import branchHeaderData from 'components/Molecules/BranchHeader/data';
import projectSliderData from 'components/Organisms/ProjectSlider/data';
import footerData from 'components/Organisms/Footer/data';
import featuredTextData from 'components/Molecules/FeaturedText/data';
import bodyTextData from 'components/Molecules/BodyText/data';
import mediaData from 'components/Organisms/Media/data';
import infobarData from 'components/Organisms/Infobar/data';
import contentFilterData from 'components/Organisms/ContentFilter/data';
import linkHighlightData from 'components/Organisms/LinkHighlight/data';
import dualPortraitsData from 'components/Organisms/DualPortraits/data';
import contactFormData from 'components/Organisms/ContactForm/data';
import vacancyFilterData from 'components/Organisms/VacancyFilter/data';
import atmosphereData from 'components/Molecules/Atmosphere/data';

import HomeAnimation from 'components/Organisms/HomeAnimation/index';
import PageHeader from 'components/Molecules/PageHeader/index';
import BranchHeader from 'components/Molecules/BranchHeader/index';
import Navigation from 'components/Organisms/Navigation/index';
import ProjectSlider from 'components/Organisms/ProjectSlider/index';
import Footer from 'components/Organisms/Footer/index';
import FeaturedText from 'components/Molecules/FeaturedText/index';
import BodyText from 'components/Molecules/BodyText/index';
import Media from 'components/Organisms/Media';
import Infobar from 'components/Organisms/Infobar';
import LinkHighlight from 'components/Organisms/LinkHighlight';
import DualPortraits from 'components/Organisms/DualPortraits';
import ContentFilter from 'components/Organisms/ContentFilter';
import ContactForm from 'components/Organisms/ContactForm';
import VacancyFilter from 'components/Organisms/VacancyFilter';
import Atmosphere from 'components/Molecules/Atmosphere';

import GlobalProvider from 'components/Context/GlobalProvider';

storiesOf('pages|Expertise', module)
  .add('Overview', () => (
    <Fragment>
      <GlobalProvider>
        <Navigation {...navigationData} />
        <main>
          <BranchHeader {...branchHeaderData} />
          <ContentFilter {...contentFilterData} />
        </main>
        <Footer {...footerData} />
      </GlobalProvider>
    </Fragment>
  ));

storiesOf('pages|Homepage', module)
  .add('Home', () => (
    <Fragment>
      <GlobalProvider>
        <Navigation {...navigationData} />
        <main>
          <HomeAnimation {...homepageData} />
        </main>
      </GlobalProvider>
    </Fragment>
  ));

storiesOf('pages|Cases', module)
  .add('Overview', () => (
    <Fragment>
      <GlobalProvider>
        <Navigation {...navigationData} />
        <main>
          <PageHeader {...pageHeaderData} />
          <ProjectSlider {...projectSliderData} collapseTop />
          <ProjectSlider {...projectSliderData} />
          <ProjectSlider {...projectSliderData} />
          <ProjectSlider {...projectSliderData} />
        </main>
        <Footer {...footerData} />
      </GlobalProvider>
    </Fragment>
  ))
  .add('Detail', () => (
    <Fragment>
      <GlobalProvider>
        <Navigation {...navigationData} theme="transparent-dark" />
        <main>
          <PageHeader {...pageHeaderData} theme="white" size />
          <Media
            {...mediaData}
            videoDuration={null}
            smallImage={mediaData.smallImageIfNoVideo}
            description={null}
            topBackground="white"
            bottomBackground="black"
            youtubeId={null}
            vimeoId={null}
          />
          <Infobar
            {...infobarData}
            strokeBottom
          />
          <FeaturedText {...featuredTextData} />
          <BodyText
            {...bodyTextData}
            collapseTop
            theme="black"
          />
          <DualPortraits
            {...dualPortraitsData}
            collapseTop
            theme="black"
          />
          <BodyText {...bodyTextData} />
          <LinkHighlight {...linkHighlightData} />
        </main>
        <Footer {...footerData} />
      </GlobalProvider>
    </Fragment>
  ));

storiesOf('pages|Vacancies', module)
  .add('Overview', () => (
    <Fragment>
      <GlobalProvider>
        <Navigation {...navigationData} theme="transparent-light" />
        <main>
          <PageHeader {...pageHeaderData} theme="black" size />
          <VacancyFilter {...vacancyFilterData} />
          <Atmosphere
            {...atmosphereData}
            bottomBackground="black"
            topBackground="black"
          />
        </main>
        <Footer {...footerData} />
      </GlobalProvider>
    </Fragment>
  ));

storiesOf('pages|Contact', module)
  .add('Contact', () => (
    <Fragment>
      <GlobalProvider>
        <Navigation {...navigationData} />
        <main>
          <ContactForm {...contactFormData} />
        </main>
        <Footer {...footerData} />
      </GlobalProvider>
    </Fragment>
  ));

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import { trackVirtualPageView } from 'components/Utils/Analytics';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/


// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes


class Layout extends Component {
  componentDidMount() {
    const {
      sitecoreContext,
    } = this.props;

    if (!window.location.hash) {
      trackVirtualPageView(window.location.pathname, sitecoreContext.seo.metaTitle);
    }
  }

  render() {
    const {
      route,
      sitecoreContext,
    } = this.props;

    const twitterAccount = '@Weareyou_d_a';
    const defaultShareImage = '/dist/weareyou/images/share-image.png';

    return (
      <Fragment>
        {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
        <Helmet htmlAttributes={{ lang: sitecoreContext.language }}>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>
            {(sitecoreContext.seo && sitecoreContext.seo.metaTitle)}
          </title>
          <meta name="theme-color" content="#000000" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="robots" content={(sitecoreContext.seo && sitecoreContext.seo.metaRobots) || 'all'} />
          <meta name="keywords" content={(sitecoreContext.seo && sitecoreContext.seo.metaKeywords)} />
          <meta name="description" content={(sitecoreContext.seo && sitecoreContext.seo.metaDescription)} />
          <link rel="canonical" href={(sitecoreContext.seo && sitecoreContext.seo.canonicalUrl) || (sitecoreContext.seo && sitecoreContext.seo.pageUrl)} />

          {/* Facebook OG */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={(sitecoreContext.seo && sitecoreContext.seo.pageUrl)} />
          <meta property="og:title" content={(sitecoreContext.seo && sitecoreContext.seo.metaTitle)} />
          <meta property="og:description" content={(sitecoreContext.seo && sitecoreContext.seo.metaDescription)} />
          <meta property="og:image" content={(sitecoreContext.seo && sitecoreContext.seo.openGraphImage) || defaultShareImage} />

          {/* Twitter OG */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={twitterAccount} />
          <meta name="twitter:title" content={(sitecoreContext.seo && sitecoreContext.seo.metaTitle)} />
          <meta name="twitter:description" content={(sitecoreContext.seo && sitecoreContext.seo.metaDescription)} />
          <meta name="twitter:image" content={(sitecoreContext.seo && sitecoreContext.seo.openGraphImage) || defaultShareImage} />

          {/* Main */}
          <link href="/dist/weareyou/images/icons-32.png" rel="icon" type="image/png" sizes="32x32" />
          <link href="/dist/weareyou/images/icons-48.png" rel="icon" type="image/png" sizes="48x48" />

          {/* iOS */}
          <link href="/dist/weareyou/images/icons-120.png" rel="apple-touch-icon" />
          <link href="/dist/weareyou/images/icons-76.png" rel="apple-touch-icon" sizes="76x76" />
          <link href="/dist/weareyou/images/icons-120.png" rel="apple-touch-icon" sizes="120x120" />
          <link href="/dist/weareyou/images/icons-152.png" rel="apple-touch-icon" sizes="152x152" />

          {/* Android */}
          <link href="/dist/weareyou/images/icons-192.png" rel="icon" sizes="192x192" />
          <link href="/dist/weareyou/images/icons-128.png" rel="icon" sizes="128x128" />

          {/* UC Browser */}
          <link href="/dist/weareyou/images/icons-72.png" rel="apple-touch-icon" sizes="72x72" />

          <link rel="manifest" href="/dist/weareyou/manifest.json" />
          <link rel="shortcut icon" href="/dist/weareyou/favicon.ico" />

          {/* Google Tag Manager */}
          {(sitecoreContext.gtmContainerId && (
            <script>
              {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${sitecoreContext.gtmContainerId}');`}
            </script>
          ))}

          {/* Structured data (website) */}
          {(sitecoreContext.seo && sitecoreContext.seo.structuredData && sitecoreContext.seo.structuredData.website && (
            <script type="application/ld+json">
              {`${sitecoreContext.seo.structuredData.website}`}
            </script>
          ))}

          {/* Structured data (corporation) */}
          {(sitecoreContext.seo && sitecoreContext.seo.structuredData && sitecoreContext.seo.structuredData.corporation && (
            <script type="application/ld+json">
              {`${sitecoreContext.seo.structuredData.corporation}`}
            </script>
          ))}

          {/* Structured data (breadcrumb) */}
          {(sitecoreContext.seo && sitecoreContext.seo.structuredData && sitecoreContext.seo.structuredData.breadcrumb && (
            <script type="application/ld+json">
              {`${sitecoreContext.seo.structuredData.breadcrumb}`}
            </script>
          ))}

          {/* Structured data (jobPosting) */}
          {(sitecoreContext.seo && sitecoreContext.seo.structuredData && sitecoreContext.seo.structuredData.jobPosting && (
            <script type="application/ld+json">
              {`${sitecoreContext.seo.structuredData.jobPosting}`}
            </script>
          ))}

          {/* Google Tag Manager (noscript) */}
          {(sitecoreContext.gtmContainerId && (
            <noscript>
              {`<iframe src="https://www.googletagmanager.com/ns.html?id=${sitecoreContext.gtmContainerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
            </noscript>
          ))}
        </Helmet>

        <Fragment>
          <Placeholder name="jss-header" rendering={route} />
        </Fragment>

        {/* root placeholder for the app, which we add components to using route data */}
        <main className="container">
          <Placeholder name="jss-main" rendering={route} />
        </main>

        <Fragment>
          <Placeholder name="jss-footer" rendering={route} />
        </Fragment>

      </Fragment>
    );
  }
}

Layout.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
  sitecoreContext: PropTypes.objectOf(PropTypes.any),
};

Layout.defaultProps = {
  route: {},
  sitecoreContext: {},
};

export default withSitecoreContext()(Layout);

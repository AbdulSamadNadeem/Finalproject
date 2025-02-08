import "./index.css";
import ReduxProvider from "../Store/Reduxprovider";
import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

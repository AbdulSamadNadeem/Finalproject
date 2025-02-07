import "./index.css";
import ReduxProvider from "../Store/Reduxprovider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

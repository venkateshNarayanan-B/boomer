import TopNav from "../components/TopNav";
import { AuthProvider } from "../context/auth";
import {ThemeProvider} from "../context/theme";
import { Toaster } from "react-hot-toast";



function MyApp({ Component, pageProps }) {
    return  <ThemeProvider>
                <AuthProvider>
                <TopNav />
                <Toaster />
                <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>;
}

export default MyApp;
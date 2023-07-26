import TopNav from "../components/TopNav";
import { AuthProvider } from "../context/auth";
import {ThemeProvider} from "../context/theme";
import {MediaProvider} from "../context/media";
import { Toaster } from "react-hot-toast";



function MyApp({ Component, pageProps }) {
    return  <ThemeProvider>
                <AuthProvider>
                    <MediaProvider>
                        <TopNav />
                        <Toaster />
                        <Component {...pageProps} />
                    </MediaProvider>
                </AuthProvider>
            </ThemeProvider>;
}

export default MyApp;
import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import { trackSubscribe } from './utils/pixel';

function App() {
    const telegramLink = "https://t.me/+7hYekkxha0AyNDZl";

    // 1. Initial Meta Tracking & Back-Button Reset
    useEffect(() => {
        // Fire PageView immediately when site opens
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }

        // Logic to refresh if user clicks "Back" from Telegram
        const handleBackNavigation = (event) => {
            if (event.persisted) {
                window.location.reload();
            }
        };

        window.addEventListener('pageshow', handleBackNavigation);
        return () => window.removeEventListener('pageshow', handleBackNavigation);
    }, []);

    // 2. The Brain Function
    const handleJoinClick = () => {
        // Track the main conversion (Subscribe)
        trackSubscribe();

        // 3. Small delay to ensure Meta receives the data before redirect
        setTimeout(() => {
            window.location.href = telegramLink;
        }, 500);
    };

    return (
        <LandingPage onJoin={handleJoinClick} />
    );
}

export default App;
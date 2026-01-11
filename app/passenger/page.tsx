import PassengerNavbar from '../../components/passenger/PassengerNavbar';
import PassengerHero from '../../components/passenger/PassengerHero';
import PassengerDashboard from '../../components/passenger/PassengerDashboard';
import PassengerFooter from '../../components/passenger/PassengerFooter';
import PassengerSearchBar from '../../components/passenger/PassengerSearchBar';

export default function PassengerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PassengerNavbar />
      <PassengerHero />
      <PassengerSearchBar />
      <PassengerDashboard />
      <PassengerFooter />
    </div>
  );
}
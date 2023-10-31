import "./App.css";
import Commitments from "./components/commitments";
import ComplianceNote from "./components/complianceNote";
import DownloadBanner from "./components/downloadBanner";
import FeatureCard from "./components/featureCard";
import HeroSection from "./components/heroSection";
import Logo from "./components/logo";
import Paycheck from "./components/paycheckButton";
import MobilePhoneNumberInput from "./components/phoneNumberInput/mobile";
import SecurityStandards from "./components/securityStandards";
import USPsExplained from "./components/USPsExplained";
import VideoBackground from "./components/videoBackground";
import Footer from "./footer";

function App() {
	return (
		<>
			<main className=' min-w-screen min-h-screen p-0 md:px-[45px]'>
				<VideoBackground />
				<section className='relative flex justify-between items-center'>
					<Logo />
					<Paycheck />
				</section>
				<div className='mt-40 md:mt-32'>
					<HeroSection />
				</div>
			</main>
			<USPsExplained />
			<FeatureCard />
			<Commitments />
			<ComplianceNote />
			<DownloadBanner />
			<SecurityStandards />
			<Footer />
			<MobilePhoneNumberInput />
		</>
	);
}

export default App;

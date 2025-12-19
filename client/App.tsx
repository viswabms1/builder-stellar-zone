import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Eligibility from "./pages/Eligibility";
import InternationalAdmissions from "./pages/InternationalAdmissions";
import CampusLife from "./pages/CampusLife";
import Examinations from "./pages/Examinations";
import Research from "./pages/Research";
import Engineering from "./pages/Engineering";
import ElectronicsCommunication from "./pages/ElectronicsCommunication";
import ComputerApplications from "./pages/ComputerApplications";
import Law from "./pages/Law";
import AppliedSciences from "./pages/AppliedSciences";
import ManagementStudies from "./pages/ManagementStudies";
import HealthSciences from "./pages/HealthSciences";
import MedicalEducationResearch from "./pages/MedicalEducationResearch";
import CEE from "./pages/CEE";
import JournalismMassComm from "./pages/JournalismMassComm";
import BDesignOverview from "./pages/BDesignOverview";
import FacultyDirectory from "./pages/FacultyDirectory";
import CDSIMER from "./pages/CDSIMER";
import CDSIMERHospital from "./pages/CDSIMERHospital";
import CDSIMERLife from "./pages/CDSIMERLife";
import DeptAIML from "./pages/DeptAIML";
import DeptCSE from "./pages/DeptCSE";
import IQAC from "./pages/IQAC";
import FacultyCSE from "./pages/FacultyCSE";
import FacultyAIML from "./pages/FacultyAIML";
import CentreOfExcellence from "./pages/CentreOfExcellence";
import VisionMission from "./pages/VisionMission";
import History from "./pages/History";
import Leadership from "./pages/Leadership";
import BoardOfGovernors from "./pages/BoardOfGovernors";
import BoardOfManagement from "./pages/BoardOfManagement";
import FinanceCommittee from "./pages/FinanceCommittee";
import AcademicCouncil from "./pages/AcademicCouncil";
import ResearchInnovationCouncil from "./pages/ResearchInnovationCouncil";
import Accreditations from "./pages/Accreditations";
import Facilities from "./pages/Facilities";
import Placements from "./pages/Placements";
import Careers from "./pages/Careers";
import MedicalEngineering from "./pages/MedicalEngineering";
import { ThemeProvider } from "./providers/theme-provider";
import { LanguageProvider } from "./providers/language-provider";
import FacultyProfile from "./pages/FacultyProfile";
import FacultyRohitKumarSingh from "./pages/faculty/RohitKumarSingh";
import GirishaGSPage from "./pages/faculty/GirishaGS";
import UdayaKumarReddyPage from "./pages/faculty/UdayaKumarReddy";
import BipinKumarRaiPage from "./pages/faculty/BipinKumarRai";
import RevathiVPage from "./pages/faculty/RevathiV";
import BasavarajNHiremathPage from "./pages/faculty/BasavarajNHiremath";
import NatarajanVenkateswaranPage from "./pages/faculty/NatarajanVenkateswaran";
import BonduVenkateswarluPage from "./pages/faculty/BonduVenkateswarlu";
import SKMouleeswaranPage from "./pages/faculty/SKMouleeswaran";
import VengatesanKrishnasamyPage from "./pages/faculty/VengatesanKrishnasamy";
import GeorgeFernandezPage from "./pages/faculty/GeorgeFernandez";
import ShashikiranVPage from "./pages/faculty/ShashikiranV";
import TanvirHabibSardarPage from "./pages/faculty/TanvirHabibSardar";
import GousiaThahniyathPage from "./pages/faculty/GousiaThahniyath";
import NBharathirajaPage from "./pages/faculty/NBharathiraja";
import RupamBhagawatiPage from "./pages/faculty/RupamBhagawati";
import ASenthilKumarPage from "./pages/faculty/ASenthilKumar";
import JSebastianNixonPage from "./pages/faculty/JSebastianNixon";
import PrabhakarMPage from "./pages/faculty/PrabhakarM";
import RameshSPage from "./pages/faculty/RameshS";
import MeenakshiMalhotraPage from "./pages/faculty/MeenakshiMalhotra";
import PraveenKulkarniPage from "./pages/faculty/PraveenKulkarni";
import SavithaHiremathPage from "./pages/faculty/SavithaHiremath";
import SridharSKPage from "./pages/faculty/SridharSK";
import ArunkumarGopuPage from "./pages/faculty/ArunkumarGopu";
import KumarDilipPage from "./pages/faculty/KumarDilip";
import JeevaSPage from "./pages/faculty/JeevaS";
import RenukaDeviPage from "./pages/faculty/RenukaDevi";
import ArjunKrishnamurthyPage from "./pages/faculty/ArjunKrishnamurthy";
import GokulakrishnanPage from "./pages/faculty/Gokulakrishnan";
import SowmyaHDPage from "./pages/faculty/SowmyaHD";
import ShreekantSalotagiPage from "./pages/faculty/ShreekantSalotagi";
import ChethanKSPage from "./pages/faculty/ChethanKS";
import YashaswinePage from "./pages/faculty/Yashaswini";
import RoshanSanuPage from "./pages/faculty/RoshanSanu";
import MohammedJavaidPage from "./pages/faculty/MohammedJavaid";
import PannangiNareshPage from "./pages/faculty/PannangiNaresh";
import DamodharanDPage from "./pages/faculty/DamodharnD";
import ChetanVPage from "./pages/faculty/ChetanV";
import SohamGhoshPage from "./pages/faculty/SohamGhosh";
import PavithraDPage from "./pages/faculty/PavithraD";
import AnnapurnaShobilthaPage from "./pages/faculty/AnnapurnaShobitha";
import SmritiBartiPage from "./pages/faculty/SmritiBharti";
import SoumadipMondalPage from "./pages/faculty/SoumadipMondal";
import RitikChhatwaniPage from "./pages/faculty/RitikChhatwani";
import ShivaniPage from "./pages/faculty/Shivani";
import SwetaChopdarPage from "./pages/faculty/SwetaChopdar";
import ManasSinghaPage from "./pages/faculty/ManasSingha";
import MayankKumarPage from "./pages/faculty/MayankKumar";
import PraveenGopalGaonkarPage from "./pages/faculty/PraveenGopalGaonkar";
import PreetiGajdhanePage from "./pages/faculty/PreetiGajdhane";
import PriyaPudkePage from "./pages/faculty/PriyaPudke";
import RaunitMauryaPage from "./pages/faculty/RaunitMaurya";
import RupamSahPage from "./pages/faculty/RupamSah";
import ShahidRazaPage from "./pages/faculty/ShahidRaza";
import SonaliBairsgiPage from "./pages/faculty/SonaliBairagi";
import TrinadhSingampalliPage from "./pages/faculty/TrinadhSingampalli";
import NandiniKPage from "./pages/faculty/NandiniK";
import PoojaShreeHRPage from "./pages/faculty/PoojaShreeHR";
import KavyashreeIPattanPage from "./pages/faculty/KavyashreeIPattan";
import SanthoshMPage from "./pages/faculty/SanthoshM";
import NaitikSTPage from "./pages/faculty/NaitikST";
import SasikalaNPage from "./pages/faculty/SasikalaN";
import RadhikaKPage from "./pages/faculty/RadhikaK";
import BenakaSanthoshaPage from "./pages/faculty/BenakaSanthosha";
import JayavrindasVrindavnamPage from "./pages/faculty/JayavrindasVrindavanam";
import HanumannthSastryPage from "./pages/faculty/HanumannthSastry";
import BahubalSiragapurPage from "./pages/faculty/BahubalSiragapur";
import JoshuvaArockiaPage from "./pages/faculty/JoshuvaArockia";
import SureshKandasamyPage from "./pages/faculty/SureshKandasamy";
import VegiFernandoPage from "./pages/faculty/VegiFernando";
import VinuthaAIMLPage from "./pages/faculty/VinuthaAIML";
import AbdulHaqPage from "./pages/faculty/AbdulHaq";
import PrateekVermaPage from "./pages/faculty/PrateekVerma";
import JitendraJaiswalPage from "./pages/faculty/JitendraJaiswal";
import NagarjunaNaikPage from "./pages/faculty/NagarjunaNaik";
import PrincyRandhawPage from "./pages/faculty/PrincyRandhawa";
import SumantMohaptraPage from "./pages/faculty/SumantMohapatra";
import AnimeshSrivastavPage from "./pages/faculty/AnimeshSrivastava";
import SumitYadavPage from "./pages/faculty/SumitYadav";
import SubhashMondalPage from "./pages/faculty/SubhashMondal";
import PradeepKumarAIMLPage from "./pages/faculty/PradeepKumarAIML";
import SriramkumarAIMLPage from "./pages/faculty/SriramkumarAIML";
import MithaGuruPage from "./pages/faculty/MithaGuru";
import RakshitaAIMLPage from "./pages/faculty/RakshitaAIML";
import LakshmananPage from "./pages/faculty/Lakshmanan";
import RajeswariPage from "./pages/faculty/Rajeswari";
import SahilPockerPage from "./pages/faculty/SahilPocker";
import BhuvanaMohiniPage from "./pages/faculty/BhuvanaMohini";
import NiveithaAIMLPage from "./pages/faculty/NiveithaAIML";
import AnkitaThakkarPage from "./pages/faculty/AnkitaThakkar";
import SughandhaSaxenaPage from "./pages/faculty/SughandhaSaxena";
import TrupthiRaoPage from "./pages/faculty/TrupthiRao";
import GovindPandeyPage from "./pages/faculty/GovindPandey";
import PragnyaMishaPage from "./pages/faculty/PragnyaMishra";
import VerriboinaAntonyPage from "./pages/faculty/VerriboinaAntony";
import SoheliChakrabortyPage from "./pages/faculty/SoheliChakraborty";
import AnubrataSingharyPage from "./pages/faculty/AnubrataSingharoy";
import TejalKhadePage from "./pages/faculty/TejalKhade";
import ShivnandanRaiPage from "./pages/faculty/ShivnandanRai";
import ParthaSenPage from "./pages/faculty/ParthaSen";
import ArpitKumarPage from "./pages/faculty/ArpitKumar";
import SouvikGhoshPage from "./pages/faculty/SouvikGhosh";
import AmritaKunduPage from "./pages/faculty/AmritaKundu";
import UpasanaShilPage from "./pages/faculty/UpasanaShil";
import HairunesaBeeviPage from "./pages/faculty/HairunesaBeevi";
import SrinidhiAIMLPage from "./pages/faculty/SrinidhiAIML";
import FacultyECE from "./pages/FacultyECE";
import PuttamadappaECEPage from "./pages/faculty/PuttamadappaECE";
import ArunBalodiPage from "./pages/faculty/ArunBalodi";
import SNPrasadECEPage from "./pages/faculty/SNPrasadECE";
import ArungalaiVendanPage from "./pages/faculty/ArungalaiVendan";
import SKSrivastavaECEPage from "./pages/faculty/SKSrivastavaECE";
import TheodoreChandraPage from "./pages/faculty/TheodoreChandra";
import RajeshKumarProfile from "./pages/faculty/RajeshKumar";
import DeptAIDS from "./pages/DeptAIDS";
import FacultyAIDS from "./pages/FacultyAIDS";
import PoongodiFacultyPage from "./pages/faculty/Poongodi";
import RameshWadawadagiFacultyPage from "./pages/faculty/RameshWadawadagi";
import HarshithGowdFacultyPage from "./pages/faculty/HarshithGowd";
import DeptMechanical from "./pages/DeptMechanical";
import FacultyMechanical from "./pages/FacultyMechanical";
import SaravanaBavanDPage from "./pages/faculty/SaravanaBavanD";
import ViswanathanRMechPage from "./pages/faculty/ViswanathanRMech";
import VinayakBHemadriPage from "./pages/faculty/VinayakBHemadri";
import RahulKumarMechPage from "./pages/faculty/RahulKumarMech";
import ShashidharaLCPage from "./pages/faculty/ShashidharaLC";
import AbhijithNPage from "./pages/faculty/AbhijithN";
import DeptAerospace from "./pages/DeptAerospace";
import FacultyAerospace from "./pages/FacultyAerospace";
import DrNagarajaSRPage from "./pages/faculty/DrNagarajaSR";
import DrBVNRamakumarPage from "./pages/faculty/DrBVNRamakumar";
import DrPrashantheKumarPage from "./pages/faculty/DrPrashantheKumar";
import DrAvinashKumarSauravPage from "./pages/faculty/DrAvinashKumarSaurav";
import ProfSripadKulkarniPage from "./pages/faculty/ProfSripadKulkarni";
import DrAjeySinghPage from "./pages/faculty/DrAjeySingh";
import DrGKSuryanarayanaPage from "./pages/faculty/DrGKSuryanarayana";
import DrMathewChackoPage from "./pages/faculty/DrMathewChacko";
import DrKartikSTandelPage from "./pages/faculty/DrKartikSTandel";
import DrSrinathRamakrishnanPage from "./pages/faculty/DrSrinathRamakrishnan";
import MsSwagatikaPage from "./pages/faculty/MsSwagatika";
import DrVivekAnandPage from "./pages/faculty/DrVivekAnand";
import DeptAIRobotics from "./pages/DeptAIRobotics";
import FacultyAIRobotics from "./pages/FacultyAIRobotics";
import DrPramodKumarNaikPage from "./pages/faculty/DrPramodKumarNaik";
import DrRupamBhaduriPage from "./pages/faculty/DrRupamBhaduri";
import DrGangadharTGPage from "./pages/faculty/DrGangadharTG";
import DrBharathKumarSPage from "./pages/faculty/DrBharathKumarS";
import MrVikasVishwakarmaPage from "./pages/faculty/MrVikasVishwakarma";
import MrLalitAshutoshPage from "./pages/faculty/MrLalitAshutosh";
import DeptDataScience from "./pages/DeptDataScience";
import FacultyDataScience from "./pages/FacultyDataScience";
import DrShailaSGPage from "./pages/faculty/DrShailaSG";
import DrSanthoshKumarGPage from "./pages/faculty/DrSanthoshKumarG";
import DrSureshArumugamPage from "./pages/faculty/DrSureshArumugam";
import DrUPavanKumarPage from "./pages/faculty/DrUPavanKumar";
import ShivammaDPage from "./pages/faculty/ShivammaD";
import MonishLPage from "./pages/faculty/MonishL";
import ManjulaPage from "./pages/faculty/ManjulaM";
import SindhuAPage from "./pages/faculty/SindhuA";
import MrGodhandaramanTPage from "./pages/faculty/MrGodhandaramanT";
import ProfChandrakalaLPage from "./pages/faculty/ProfChandrakalaL";
import ProfPraptiBhattachareePage from "./pages/faculty/ProfPraptiBhattacharjee";
import MrMithunKumarPage from "./pages/faculty/MrMithunKumar";
import MrMeghaChandelPage from "./pages/faculty/MrMeghaChandel";
import MrKishorMalakarPage from "./pages/faculty/MrKishorMalakar";
import MrShashankShekharPage from "./pages/faculty/MrShashankShekhar";
import MsSouramitaBhowmikPage from "./pages/faculty/MsSouramitaBhowmik";
import MrMrigankaDasPage from "./pages/faculty/MrMrigankaDas";
import MsSnigdhaSikhakashyapPage from "./pages/faculty/MsSnigdhaSikhakashyap";
import DrJobinThomasPage from "./pages/faculty/DrJobinThomas";
import DeptCybersecurity from "./pages/DeptCybersecurity";
import FacultyCybersecurity from "./pages/FacultyCybersecurity";
import DrDilipKumarJangBahadurSainiPage from "./pages/faculty/DrDilipKumarJangBahadurSaini";
import DrDurbadalChattarajPage from "./pages/faculty/DrDurbadalChattaraj";
import DrPrajwalasimhaSNPage from "./pages/faculty/DrPrajwalasimhaSN";
import DrMubeenAhmedKhanPage from "./pages/faculty/DrMubeenAhmedKhan";
import NaveenKulkarniPage from "./pages/faculty/NaveenKulkarni";
import SharanabasappaTadkalPage from "./pages/faculty/SharanabasappaTadkal";
import DeepthikaKaruppusamyPage from "./pages/faculty/DeepthikaKaruppusamy";
import MrBiswajitDebnathPage from "./pages/faculty/MrBiswajitDebnath";
import MrJosheRajPage from "./pages/faculty/MrJosheRaj";
import DrDSumathiPage from "./pages/faculty/DrDSumathi";
import DrGHemanthKumarPage from "./pages/faculty/DrGHemanthKumar";
import DrDevipriyaVSPage from "./pages/faculty/DrDevipriyaVS";
import DrIndushreeMPage from "./pages/faculty/DrIndushreeM";
import ViníthaVPage from "./pages/faculty/ViníthaV";
import RanjimaPPage from "./pages/faculty/RanjimaP";
import MsSayeliDeyPage from "./pages/faculty/MsSayeliDey";
import MsArchitaBhattacharyyaPage from "./pages/faculty/MsArchitaBhattacharyya";
import ProfGNVPrasadPage from "./pages/faculty/ProfGNVPrasad";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/academics/engineering" element={<Engineering />} />
                <Route
                  path="/academics/engineering/electronics-communication"
                  element={<ElectronicsCommunication />}
                />
                <Route
                  path="/academics/computer-applications"
                  element={<ComputerApplications />}
                />
                <Route path="/academics/law" element={<Law />} />
                <Route
                  path="/academics/management-studies"
                  element={<ManagementStudies />}
                />
                <Route
                  path="/academics/health-sciences"
                  element={<HealthSciences />}
                />
                <Route
                  path="/academics/medical-education-research"
                  element={<MedicalEducationResearch />}
                />
                <Route
                  path="/academics/health-sciences/cdsimer"
                  element={<CDSIMER />}
                />
                <Route
                  path="/academics/health-sciences/cdsimer/hospital"
                  element={<CDSIMERHospital />}
                />
                <Route
                  path="/academics/health-sciences/cdsimer/life"
                  element={<CDSIMERLife />}
                />
                <Route path="/academics/cee" element={<CEE />} />
                <Route
                  path="/academics/journalism-mass-communication"
                  element={<JournalismMassComm />}
                />
                <Route
                  path="/academics/design/bdesign"
                  element={<BDesignOverview />}
                />
                <Route
                  path="/academics/basic-applied-sciences"
                  element={<AppliedSciences />}
                />
                <Route
                  path="/academics/engineering/computer-science"
                  element={<DeptCSE />}
                />
                <Route
                  path="/academics/engineering/cse-aiml"
                  element={<DeptAIML />}
                />
                <Route
                  path="/academics/engineering/cse-aiml/faculty"
                  element={<FacultyAIML />}
                />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-jayavrinda-vrindavanam-v" element={<JayavrindasVrindavnamPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-hanumanth-sastry-sistla" element={<HanumannthSastryPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-bahubali-shiragapur" element={<BahubalSiragapurPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-joshuva-arockia-dhanraj" element={<JoshuvaArockiaPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/prof-suresh-kandasamy" element={<SureshKandasamyPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-vegi-fernando-a" element={<VegiFernandoPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-vinutha-n" element={<VinuthaAIMLPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-abdul-haq-nalband" element={<AbdulHaqPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-prateek-verma" element={<PrateekVermaPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-jitendra-jaiswal" element={<JitendraJaiswalPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-mude-nagarjuna-naik" element={<NagarjunaNaikPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-princy-randhawa" element={<PrincyRandhawPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-sumant-kumar-mohapatra" element={<SumantMohaptraPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-animesh-srivastava" element={<AnimeshSrivastavPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-sumit-kumar-yadav" element={<SumitYadavPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-subhash-mondal" element={<SubhashMondalPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-pradeep-kumar-k" element={<PradeepKumarAIMLPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-r-sriramkumar" element={<SriramkumarAIMLPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mrs-mitha-guru" element={<MithaGuruPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/rakshita-r" element={<RakshitaAIMLPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-m-lakshmanan" element={<LakshmananPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-svkr-rajeswari" element={<RajeswariPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-sahil-pocker" element={<SahilPockerPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-bhuvana-mohini-t-n" element={<BhuvanaMohiniPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-nivetha-r" element={<NiveithaAIMLPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/prof-ankita-thakkar" element={<AnkitaThakkarPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/dr-sugandha-saxena" element={<SughandhaSaxenaPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/prof-trupthi-rao" element={<TrupthiRaoPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-govind-kumar-pandey" element={<GovindPandeyPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-pragnya-pragatika-mishra" element={<PragnyaMishaPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-verriboina-antony" element={<VerriboinaAntonyPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-soheli-chakraborty" element={<SoheliChakrabortyPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-anubrata-singharoy" element={<AnubrataSingharyPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-tejal-khade" element={<TejalKhadePage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-shivnandan-rai" element={<ShivnandanRaiPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-partha-protim-sen" element={<ParthaSenPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-arpit-kumar" element={<ArpitKumarPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/mr-souvik-ghosh" element={<SouvikGhoshPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-amrita-kundu" element={<AmritaKunduPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-upasana-shil" element={<UpasanaShilPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/ms-hairunesa-beevi" element={<HairunesaBeeviPage />} />
                <Route path="/academics/engineering/cse-aiml/faculty/prof-kuna-srinidhi" element={<SrinidhiAIMLPage />} />
                <Route
                  path="/academics/engineering/cse-ai-ds"
                  element={<DeptAIDS />}
                />
                <Route
                  path="/academics/engineering/cse-ai-ds/faculty"
                  element={<FacultyAIDS />}
                />
                <Route path="/academics/engineering/cse-ai-ds/faculty/dr-poongodi-t" element={<PoongodiFacultyPage />} />
                <Route path="/academics/engineering/cse-ai-ds/faculty/dr-ramesh-wadawadagi" element={<RameshWadawadagiFacultyPage />} />
                <Route path="/academics/engineering/cse-ai-ds/faculty/prof-nadavadi-harshith-gowd" element={<HarshithGowdFacultyPage />} />
                <Route
                  path="/academics/engineering/mechanical-engineering"
                  element={<DeptMechanical />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty"
                  element={<FacultyMechanical />}
                />
                <Route path="/academics/engineering/mechanical-engineering/faculty/dr-saravana-bavan-d" element={<SaravanaBavanDPage />} />
                <Route path="/academics/engineering/mechanical-engineering/faculty/dr-viswanathan-r" element={<ViswanathanRMechPage />} />
                <Route path="/academics/engineering/mechanical-engineering/faculty/dr-vinayak-b-hemadri" element={<VinayakBHemadriPage />} />
                <Route path="/academics/engineering/mechanical-engineering/faculty/dr-rahul-kumar" element={<RahulKumarMechPage />} />
                <Route path="/academics/engineering/mechanical-engineering/faculty/dr-shashidhara-l-c" element={<ShashidharaLCPage />} />
                <Route path="/academics/engineering/mechanical-engineering/faculty/abhijith-n" element={<AbhijithNPage />} />
                <Route
                  path="/academics/engineering/aerospace-engineering"
                  element={<DeptAerospace />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty"
                  element={<FacultyAerospace />}
                />
                <Route path="/academics/engineering/aerospace/faculty/dr-nagaraja-s-r" element={<DrNagarajaSRPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-b-v-n-ramakumar" element={<DrBVNRamakumarPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-prashantha-kumar" element={<DrPrashantheKumarPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-avinash-kumar-saurav" element={<DrAvinashKumarSauravPage />} />
                <Route path="/academics/engineering/aerospace/faculty/prof-sripad-kulkarni" element={<ProfSripadKulkarniPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-ajey-singh" element={<DrAjeySinghPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-g-k-suryanarayana" element={<DrGKSuryanarayanaPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-mathew-chacko" element={<DrMathewChackoPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-kartik-s-tandel" element={<DrKartikSTandelPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-srinath-ramakrishnan" element={<DrSrinathRamakrishnanPage />} />
                <Route path="/academics/engineering/aerospace/faculty/ms-swagatika" element={<MsSwagatikaPage />} />
                <Route path="/academics/engineering/aerospace/faculty/dr-vivek-anand" element={<DrVivekAnandPage />} />
                <Route
                  path="/academics/engineering/ai-robotics"
                  element={<DeptAIRobotics />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty"
                  element={<FacultyAIRobotics />}
                />
                <Route path="/academics/engineering/ai-robotics/faculty/dr-pramod-kumar-naik" element={<DrPramodKumarNaikPage />} />
                <Route path="/academics/engineering/ai-robotics/faculty/dr-rupam-bhaduri" element={<DrRupamBhaduriPage />} />
                <Route path="/academics/engineering/ai-robotics/faculty/dr-gangadhar-t-g" element={<DrGangadharTGPage />} />
                <Route path="/academics/engineering/ai-robotics/faculty/dr-bharath-kumar-s" element={<DrBharathKumarSPage />} />
                <Route path="/academics/engineering/ai-robotics/faculty/mr-vikas-vishwakarma" element={<MrVikasVishwakarmaPage />} />
                <Route path="/academics/engineering/ai-robotics/faculty/mr-lalit-ashutosh" element={<MrLalitAshutoshPage />} />
                <Route
                  path="/academics/engineering/cse-data-science"
                  element={<DeptDataScience />}
                />
                <Route
                  path="/academics/engineering/cse-data-science/faculty"
                  element={<FacultyDataScience />}
                />
                <Route path="/academics/engineering/data-science/faculty/dr-shaila-s-g" element={<DrShailaSGPage />} />
                <Route path="/academics/engineering/data-science/faculty/dr-santhosh-kumar-g" element={<DrSanthoshKumarGPage />} />
                <Route path="/academics/engineering/data-science/faculty/dr-suresh-arumugam" element={<DrSureshArumugamPage />} />
                <Route path="/academics/engineering/data-science/faculty/dr-u-pavan-kumar" element={<DrUPavanKumarPage />} />
                <Route path="/academics/engineering/data-science/faculty/shivamma-d" element={<ShivammaDPage />} />
                <Route path="/academics/engineering/data-science/faculty/monish-l" element={<MonishLPage />} />
                <Route path="/academics/engineering/data-science/faculty/manjula-m" element={<ManjulaPage />} />
                <Route path="/academics/engineering/data-science/faculty/sindhu-a" element={<SindhuAPage />} />
                <Route path="/academics/engineering/data-science/faculty/mr-godhandaraman-t" element={<MrGodhandaramanTPage />} />
                <Route path="/academics/engineering/data-science/faculty/prof-chandrakala-l" element={<ProfChandrakalaLPage />} />
                <Route path="/academics/engineering/data-science/faculty/prof-prapti-bhattacharjee" element={<ProfPraptiBhattachareePage />} />
                <Route path="/academics/engineering/data-science/faculty/mr-mithun-kumar" element={<MrMithunKumarPage />} />
                <Route path="/academics/engineering/data-science/faculty/mr-megha-chandel" element={<MrMeghaChandelPage />} />
                <Route path="/academics/engineering/data-science/faculty/mr-kishor-malakar" element={<MrKishorMalakarPage />} />
                <Route path="/academics/engineering/data-science/faculty/mr-shashank-shekhar" element={<MrShashankShekharPage />} />
                <Route path="/academics/engineering/data-science/faculty/ms-souramita-bhowmik" element={<MsSouramitaBhowmikPage />} />
                <Route path="/academics/engineering/data-science/faculty/mr-mriganka-das" element={<MrMrigankaDasPage />} />
                <Route path="/academics/engineering/data-science/faculty/ms-snigdha-sikha-kashyap" element={<MsSnigdhaSikhakashyapPage />} />
                <Route path="/academics/engineering/data-science/faculty/dr-jobin-thomas" element={<DrJobinThomasPage />} />
                <Route
                  path="/academics/engineering/cse-cyber-security"
                  element={<DeptCybersecurity />}
                />
                <Route
                  path="/academics/engineering/cse-cyber-security/faculty"
                  element={<FacultyCybersecurity />}
                />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-dilip-kumar-jang-bahadur-saini" element={<DrDilipKumarJangBahadurSainiPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-durbadal-chattaraj" element={<DrDurbadalChattarajPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-prajwalasimha-s-n" element={<DrPrajwalasimhaSNPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-mubeen-ahmed-khan" element={<DrMubeenAhmedKhanPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/naveen-kulkarni" element={<NaveenKulkarniPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/sharanabasappa-tadkal" element={<SharanabasappaTadkalPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/deepthika-karuppusamy" element={<DeepthikaKaruppusamyPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/mr-biswajit-debnath" element={<MrBiswajitDebnathPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/mr-joshe-raj" element={<MrJosheRajPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-dsumathi" element={<DrDSumathiPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-g-hemanth-kumar" element={<DrGHemanthKumarPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-devipriya-v-s" element={<DrDevipriyaVSPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/dr-indushree-m" element={<DrIndushreeMPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/vinitha-v" element={<ViníthaVPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/ranjima-p" element={<RanjimaPPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/ms-sayeli-dey" element={<MsSayeliDeyPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/ms-archita-bhattacharyya" element={<MsArchitaBhattacharyyaPage />} />
                <Route path="/academics/engineering/cybersecurity/faculty/prof-g-n-v-prasad" element={<ProfGNVPrasadPage />} />
                <Route
                  path="/academics/engineering/electronics-communication/faculty"
                  element={<FacultyECE />}
                />
                <Route path="/academics/engineering/electronics-communication/faculty/dr-puttamadappa-c" element={<PuttamadappaECEPage />} />
                <Route path="/academics/engineering/electronics-communication/faculty/dr-arun-balodi" element={<ArunBalodiPage />} />
                <Route path="/academics/engineering/electronics-communication/faculty/dr-s-n-prasad" element={<SNPrasadECEPage />} />
                <Route path="/academics/engineering/electronics-communication/faculty/dr-s-arungalai-vendan" element={<ArungalaiVendanPage />} />
                <Route path="/academics/engineering/electronics-communication/faculty/dr-s-k-srivastava" element={<SKSrivastavaECEPage />} />
                <Route path="/academics/engineering/electronics-communication/faculty/dr-theodore-chandra-s" element={<TheodoreChandraPage />} />
                <Route
                  path="/academics/engineering/cs-medical-engineering"
                  element={<MedicalEngineering />}
                />
                <Route
                  path="/academics/engineering/computer-technology"
                  element={<Engineering />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty"
                  element={<FacultyCSE />}
                />
                <Route path="/academics/engineering/computer-science/faculty/dr-girisha-g-s" element={<GirishaGSPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-udaya-kumar-reddy-k-r" element={<UdayaKumarReddyPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-bipin-kumar-rai" element={<BipinKumarRaiPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-revathi-v" element={<RevathiVPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-basavaraj-n-hiremath" element={<BasavarajNHiremathPage />} />
                <Route path="/academics/engineering/computer-science/faculty/natarajan-venkateswaran" element={<NatarajanVenkateswaranPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-bondu-venkateswarlu" element={<BonduVenkateswarluPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-s-k-mouleeswaran" element={<SKMouleeswaranPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-vengatesan-krishnasamy" element={<VengatesanKrishnasamyPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-george-fernandez-i" element={<GeorgeFernandezPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-shashikiran-v" element={<ShashikiranVPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-tanvir-habib-sardar" element={<TanvirHabibSardarPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-gousia-thahniyath" element={<GousiaThahniyathPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-n-bharathiraja" element={<NBharathirajaPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-rupam-bhagawati" element={<RupamBhagawatiPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-a-senthil-kumar" element={<ASenthilKumarPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-j-sebastian-nixon" element={<JSebastianNixonPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-prabhakar-m" element={<PrabhakarMPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-ramesh-s" element={<RameshSPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-meenakshi-malhotra" element={<MeenakshiMalhotraPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-praveen-kulkarni" element={<PraveenKulkarniPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-savitha-hiremath" element={<SavithaHiremathPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-sridhar-s-k" element={<SridharSKPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-arunkumar-gopu" element={<ArunkumarGopuPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-kumar-dilip" element={<KumarDilipPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-jeeva-s" element={<JeevaSPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-renuka-devi-mn" element={<RenukaDeviPage />} />
                <Route path="/academics/engineering/computer-science/faculty/prof-arjun-krishnamurthy" element={<ArjunKrishnamurthyPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-gokulakrishnan-s" element={<GokulakrishnanPage />} />
                <Route path="/academics/engineering/computer-science/faculty/sowmya-h-d" element={<SowmyaHDPage />} />
                <Route path="/academics/engineering/computer-science/faculty/shreekant-salotagi" element={<ShreekantSalotagiPage />} />
                <Route path="/academics/engineering/computer-science/faculty/chethan-k-s" element={<ChethanKSPage />} />
                <Route path="/academics/engineering/computer-science/faculty/yashaswini" element={<YashaswinePage />} />
                <Route path="/academics/engineering/computer-science/faculty/roshan-sanu-y" element={<RoshanSanuPage />} />
                <Route path="/academics/engineering/computer-science/faculty/mohammed-javaid" element={<MohammedJavaidPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-pannangi-naresh" element={<PannangiNareshPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-damodharan-d" element={<DamodharanDPage />} />
                <Route path="/academics/engineering/computer-science/faculty/dr-chetan-v" element={<ChetanVPage />} />
                <Route path="/academics/engineering/computer-science/faculty/soham-ghosh" element={<SohamGhoshPage />} />
                <Route path="/academics/engineering/computer-science/faculty/pavithra-d" element={<PavithraDPage />} />
                <Route path="/academics/engineering/computer-science/faculty/annapurna-shobitha-s" element={<AnnapurnaShobilthaPage />} />
                <Route path="/academics/engineering/computer-science/faculty/smriti-bharti" element={<SmritiBartiPage />} />
                <Route path="/academics/engineering/computer-science/faculty/soumadip-mondal" element={<SoumadipMondalPage />} />
                <Route path="/academics/engineering/computer-science/faculty/ritik-chhatwani" element={<RitikChhatwaniPage />} />
                <Route path="/academics/engineering/computer-science/faculty/shivani" element={<ShivaniPage />} />
                <Route path="/academics/engineering/computer-science/faculty/ms-sweta-chopdar" element={<SwetaChopdarPage />} />
                <Route path="/academics/engineering/computer-science/faculty/manas-singha" element={<ManasSinghaPage />} />
                <Route path="/academics/engineering/computer-science/faculty/mayank-kumar" element={<MayankKumarPage />} />
                <Route path="/academics/engineering/computer-science/faculty/praveen-gopal-gaonkar" element={<PraveenGopalGaonkarPage />} />
                <Route path="/academics/engineering/computer-science/faculty/preeti-gajdhane" element={<PreetiGajdhanePage />} />
                <Route path="/academics/engineering/computer-science/faculty/priya-pudke" element={<PriyaPudkePage />} />
                <Route path="/academics/engineering/computer-science/faculty/raunit-maurya" element={<RaunitMauryaPage />} />
                <Route
                  path="/academics/engineering/computer-science/faculty/rohit-kumar-singh"
                  element={<FacultyRohitKumarSingh />}
                />
                <Route path="/academics/engineering/computer-science/faculty/rupam-sah" element={<RupamSahPage />} />
                <Route path="/academics/engineering/computer-science/faculty/shahid-raza" element={<ShahidRazaPage />} />
                <Route path="/academics/engineering/computer-science/faculty/sonali-bairagi" element={<SonaliBairsgiPage />} />
                <Route path="/academics/engineering/computer-science/faculty/trinadh-singampalli" element={<TrinadhSingampalliPage />} />
                <Route path="/academics/engineering/computer-science/faculty/nandini-k" element={<NandiniKPage />} />
                <Route path="/academics/engineering/computer-science/faculty/pooja-shree-h-r" element={<PoojaShreeHRPage />} />
                <Route path="/academics/engineering/computer-science/faculty/kavyashree-i-pattan" element={<KavyashreeIPattanPage />} />
                <Route path="/academics/engineering/computer-science/faculty/santhosh-m" element={<SanthoshMPage />} />
                <Route path="/academics/engineering/computer-science/faculty/naitik-s-t" element={<NaitikSTPage />} />
                <Route path="/academics/engineering/computer-science/faculty/sasikala-n" element={<SasikalaNPage />} />
                <Route path="/academics/engineering/computer-science/faculty/radhika-k" element={<RadhikaKPage />} />
                <Route path="/academics/engineering/computer-science/faculty/benaka-santhosha-s" element={<BenakaSanthoshaPage />} />
                <Route path="/faculty/rajesh-kumar" element={<RajeshKumarProfile />} />
                <Route path="/faculty-directory" element={<FacultyDirectory />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/admissions/international" element={<InternationalAdmissions />} />
                <Route path="/eligibility" element={<Eligibility />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/campus-life" element={<CampusLife />} />
                <Route path="/examinations" element={<Examinations />} />
                <Route path="/research" element={<Research />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/vision-mission" element={<VisionMission />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/leadership" element={<Leadership />} />
                <Route path="/about/board-of-governors" element={<BoardOfGovernors />} />
                <Route path="/about/board-of-management" element={<BoardOfManagement />} />
                <Route path="/about/finance-committee" element={<FinanceCommittee />} />
                <Route path="/about/academic-council" element={<AcademicCouncil />} />
                <Route path="/about/research-innovation-council" element={<ResearchInnovationCouncil />} />
                <Route path="/about/accreditations" element={<Accreditations />} />
                <Route path="/about/facilities" element={<Facilities />} />
                <Route path="/centre-of-excellence" element={<CentreOfExcellence />} />
                <Route path="/iqac" element={<IQAC />} />
                {/* Redirect /engineering/* paths to /academics/engineering/* */}
                <Route path="/engineering/*" element={<Navigate to={`/academics${window.location.pathname}`} replace />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

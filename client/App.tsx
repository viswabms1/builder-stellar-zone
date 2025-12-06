import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                  path="/academics/engineering/ai-ml"
                  element={<DeptAIML />}
                />
                <Route
                  path="/academics/engineering/ai-ml/faculty"
                  element={<FacultyAIML />}
                />
                <Route path="/academics/engineering/ai-ml/faculty/dr-jayavrinda-vrindavanam-v" element={<JayavrindasVrindavnamPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-hanumanth-sastry-sistla" element={<HanumannthSastryPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-bahubali-shiragapur" element={<BahubalSiragapurPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-joshuva-arockia-dhanraj" element={<JoshuvaArockiaPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/prof-suresh-kandasamy" element={<SureshKandasamyPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-vegi-fernando-a" element={<VegiFernandoPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-vinutha-n" element={<VinuthaAIMLPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-abdul-haq-nalband" element={<AbdulHaqPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-prateek-verma" element={<PrateekVermaPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-jitendra-jaiswal" element={<JitendraJaiswalPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-mude-nagarjuna-naik" element={<NagarjunaNaikPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-princy-randhawa" element={<PrincyRandhawPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-sumant-kumar-mohapatra" element={<SumantMohaptraPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-animesh-srivastava" element={<AnimeshSrivastavPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-sumit-kumar-yadav" element={<SumitYadavPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-subhash-mondal" element={<SubhashMondalPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-pradeep-kumar-k" element={<PradeepKumarAIMLPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-r-sriramkumar" element={<SriramkumarAIMLPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mrs-mitha-guru" element={<MithaGuruPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/rakshita-r" element={<RakshitaAIMLPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-m-lakshmanan" element={<LakshmananPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-svkr-rajeswari" element={<RajeswariPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-sahil-pocker" element={<SahilPockerPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-bhuvana-mohini-t-n" element={<BhuvanaMohiniPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-nivetha-r" element={<NiveithaAIMLPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/prof-ankita-thakkar" element={<AnkitaThakkarPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/dr-sugandha-saxena" element={<SughandhaSaxenaPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/prof-trupthi-rao" element={<TrupthiRaoPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-govind-kumar-pandey" element={<GovindPandeyPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-pragnya-pragatika-mishra" element={<PragnyaMishaPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-verriboina-antony" element={<VerriboinaAntonyPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-soheli-chakraborty" element={<SoheliChakrabortyPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-anubrata-singharoy" element={<AnubrataSingharyPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-tejal-khade" element={<TejalKhadePage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-shivnandan-rai" element={<ShivnandanRaiPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-partha-protim-sen" element={<ParthaSenPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-arpit-kumar" element={<ArpitKumarPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/mr-souvik-ghosh" element={<SouvikGhoshPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-amrita-kundu" element={<AmritaKunduPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-upasana-shil" element={<UpasanaShilPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/ms-hairunesa-beevi" element={<HairunesaBeeviPage />} />
                <Route path="/academics/engineering/ai-ml/faculty/prof-kuna-srinidhi" element={<SrinidhiAIMLPage />} />
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

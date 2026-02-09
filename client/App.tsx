import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Events from "./pages/Events";
import TestAnnouncements from "./pages/TestAnnouncements";
import AdmissionClosingDates from "./pages/AdmissionClosingDates";
import Eligibility from "./pages/Eligibility";
import SimpleProgramLookup from "./pages/SimpleProgramLookup";
import InternationalAdmissions from "./pages/InternationalAdmissions";
import InternationalAffairs from "./pages/InternationalAffairs";
import StudyInIndia from "./pages/StudyInIndia";
import CampusLife from "./pages/CampusLife";
import Examinations from "./pages/Examinations";
import Research from "./pages/Research";
import AIFirst from "./pages/AIFirst";
import NVIDIAArchitecture from "./pages/NVIDIAArchitecture";
import Engineering from "./pages/Engineering";
import SoENewsletter from "./pages/SoENewsletter";
import ElectronicsCommunication from "./pages/ElectronicsCommunication";
import ComputerApplications from "./pages/ComputerApplications";
import ComputerApplicationsFaculty from "./pages/ComputerApplicationsFaculty";
import BCA from "./pages/BCA";
import DataScience from "./pages/DataScience";
import MCA from "./pages/MCA";
import MSCDataScience from "./pages/MSCDataScience";
import Law from "./pages/Law";
import LawPrograms from "./pages/law/Programs";
import LawFaculty from "./pages/law/Faculty";
import BALLBHonors from "./pages/law/BALLBHonors";
import BBALLBHonors from "./pages/law/BBALLBHonors";
import LLB3Year from "./pages/law/LLB3Year";
import LLMLawTechnology from "./pages/law/LLMLawTechnology";
import LLMCorporateCommercial from "./pages/law/LLMCorporateCommercial";
import AppliedSciences from "./pages/AppliedSciences";
import SBASFaculty from "./pages/basic-applied-sciences/SBASFaculty";
import BSc from "./pages/BSc";
import MSc from "./pages/MSc";
import ManagementStudies from "./pages/ManagementStudies";
import BCom from "./pages/commerce-and-management/BCom";
import BBA from "./pages/commerce-and-management/BBA";
import MBA from "./pages/commerce-and-management/MBA";
import MBAFaculty from "./pages/commerce-and-management/MBAFaculty";
import BComBBAFaculty from "./pages/commerce-and-management/BComBBAFaculty";
import HealthSciences from "./pages/HealthSciences";
import Nursing from "./pages/health-sciences/Nursing";
import Physiotherapy from "./pages/health-sciences/Physiotherapy";
import PhysiotherapyFaculty from "./pages/health-sciences/PhysiotherapyFaculty";
import Pharmacy from "./pages/health-sciences/Pharmacy";
import PharmacyFaculty from "./pages/health-sciences/PharmacyFaculty";
import BPharm from "./pages/health-sciences/BPharm";
import PharmD from "./pages/health-sciences/PharmD";
import MPharm from "./pages/health-sciences/MPharm";
import MPharmPharmaceutics from "./pages/health-sciences/MPharmPharmaceutics";
import MPharmPharmacology from "./pages/health-sciences/MPharmPharmacology";
import BScNursing from "./pages/health-sciences/BScNursing";
import BPT from "./pages/health-sciences/BPT";
import MPT from "./pages/health-sciences/MPT";
import PBBScNursing from "./pages/health-sciences/PBBScNursing";
import MScNursing from "./pages/health-sciences/MScNursing";
import NursingFaculty from "./pages/health-sciences/NursingFaculty";
import AlliedHealthSciences from "./pages/health-sciences/AlliedHealthSciences";
import AlliedHealthBSc from "./pages/health-sciences/AlliedHealthBSc";
import MPH from "./pages/health-sciences/MPH";
import MedicalEducationResearch from "./pages/MedicalEducationResearch";
import CEE from "./pages/CEE";
import JournalismMassComm from "./pages/JournalismMassComm";
import BAJournalism from "./pages/BAJournalism";
import JournalismFaculty from "./pages/journalism/Faculty";
import BDesignOverview from "./pages/BDesignOverview";
import BDesignProgram from "./pages/BDesignProgram";
import FacultyDirectory from "./pages/FacultyDirectory";
import CDSIMER from "./pages/CDSIMER";
import CDSIMERHospital from "./pages/CDSIMERHospital";
import CDSIMERLife from "./pages/CDSIMERLife";
import DeptAIML from "./pages/DeptAIML";
import DeptCSE from "./pages/DeptCSE";
import IQAC from "./pages/IQAC";
import FacultyCSE from "./pages/FacultyCSE";
import FacultyAIML from "./pages/FacultyAIML";
import FacultyMedicalEngineering from "./pages/FacultyMedicalEngineering";
import RajeshTMPage from "./pages/faculty/RajeshTM";
import PruthviPatelPage from "./pages/faculty/PruthviPatel";
import ComputerTechnologyFacultyProfile from "./pages/ComputerTechnologyFacultyProfile";
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
import ContactComplaints from "./pages/ContactComplaints";
import AntiRaggingCell from "./pages/AntiRaggingCell";
import MedicalEngineering from "./pages/MedicalEngineering";
import Physics from "./pages/Physics";
import Chemistry from "./pages/Chemistry";
import Mathematics from "./pages/Mathematics";
import HumanitiesSocialSciences from "./pages/HumanitiesSocialSciences";
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
import ChemistryFacultyList from "./pages/chemistry/FacultyList";
import PhysicsFacultyList from "./pages/physics/FacultyList";
import MathematicsFacultyList from "./pages/mathematics/FacultyList";
import HumanitiesSocialSciencesFacultyList from "./pages/humanities-social-sciences/FacultyList";
import VenkataramanaNSProfile from "./pages/chemistry/VenkataramanaNS";
import BhavanaRikhariProfile from "./pages/chemistry/BhavanaRikhari";
import SaiPrasadNayakProfile from "./pages/chemistry/SaiPrasadNayak";
import PradeepKumarBadiyaProfile from "./pages/chemistry/PradeepKumarBadiya";
import ShreeganeshHegdeProfile from "./pages/chemistry/ShreeganeshHegde";
import SKHabibullahProfile from "./pages/chemistry/SKHabibullah";
import AVRaghuProfile from "./pages/chemistry/AVRaghu";
import SrinivasaMurthyProfile from "./pages/chemistry/SrinivasaMurthy";
import ManasBaraiProfile from "./pages/chemistry/ManasBarai";
import DipenBiswarkarmaProfile from "./pages/chemistry/DipenBiswakarma";
import ManjodthKaurProfile from "./pages/chemistry/ManjojdhKaur";
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
import ECEFacultyProfile from "./pages/faculty/ECEFacultyProfile";
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
import DeptComputerTechnology from "./pages/DeptComputerTechnology";
import FacultyComputerTechnology from "./pages/FacultyComputerTechnology";
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
import VenkataramanaNSPage from "./pages/faculty/VenkataramanaNS";
import AVRaghuPage from "./pages/faculty/AVRaghu";
import BhavanaRikhariPage from "./pages/faculty/BhavanaRikhari";
import SaiPrasadNayakPage from "./pages/faculty/SaiPrasadNayak";
import PradeepKumarBadiyaPage from "./pages/faculty/PradeepKumarBadiya";
import ShreeganeshSubrayaHedgePage from "./pages/faculty/ShreeganeshSubrayaHegde";
import SKHabibullahPage from "./pages/faculty/SKHabibullah";
import VSrinivasaMurthyPage from "./pages/faculty/VSrinivasa Murthy";
import ManasBaraiPage from "./pages/faculty/ManasBarai";
import DipenBiswakarmaPage from "./pages/faculty/DipenBiswakarma";
import ManjudhKaurPage from "./pages/faculty/ManjudhKaur";
import YogeshKalegowdaPage from "./pages/faculty/YogeshKalegowda";
import MVHanumannthRaoPage from "./pages/faculty/MVHanumannthRao";
import KVijayaKumarPage from "./pages/faculty/KVijayaKumar";
import RajeshKumarPhysicsPage from "./pages/faculty/RajeshKumarPhysics";
import PriyaSharmaPhysicsPage from "./pages/faculty/PriyaSharmaPhysics";
import ArunKumarSinghPage from "./pages/faculty/ArunKumarSingh";
import MeeraPatelPhysicsPage from "./pages/faculty/MeeraPatelPhysics";
import SureshReddyPhysicsPage from "./pages/faculty/SureshReddyPhysics";
import NehaGuptaPhysicsPage from "./pages/faculty/NehaGuptaPhysics";
import VikramDesaiPhysicsPage from "./pages/faculty/VikramDesaiPhysics";
import AnitaVermaPhysicsPage from "./pages/faculty/AnitaVermaPhysics";
import DeepakNairPhysicsPage from "./pages/faculty/DeepakNairPhysics";
import RaviKumarYadavPage from "./pages/faculty/RaviKumarYadav";
import SwetaChatterjeePhysicsPage from "./pages/faculty/SwetaChatterjeePhysics";
import RajendraShallowSinghPage from "./pages/faculty/RajendraShallowSingh";
import PoojamalhotPhysicsPage from "./pages/faculty/PoojamalhotراPhysics";
import MahalakshmiPPage from "./pages/mathematics/MahalakshmiP";
import RakeshKumarSinghPage from "./pages/mathematics/RakeshKumarSingh";
import SrimantaMajiPage from "./pages/mathematics/SrimantaMaji";
import PriyankaPandeyPage from "./pages/mathematics/PriyankaPandey";
import MayankSinghBhakuniPage from "./pages/mathematics/MayankSinghBhakuni";
import ProsantaSarkarPage from "./pages/mathematics/ProsantaSarkar";
import MamathaRMPage from "./pages/mathematics/MamathaRM";
import ManojSolankiPage from "./pages/mathematics/ManojSolanki";
import PrasadiniMahapatraPage from "./pages/mathematics/PrasadiniMahapatra";
import ShitalSahaPage from "./pages/mathematics/ShitalSaha";
import ZaffarMehdiDarPage from "./pages/mathematics/ZaffarMehdiDar";
import AjaySinghJangalPage from "./pages/mathematics/AjaySinghJangal";
import KruthikPSPage from "./pages/mathematics/KruthikPS";
import SrikumarPage from "./pages/mathematics/Srikumar";
import PratikMehtaPage from "./pages/mathematics/PratikMehta";
import SreenandaRautPage from "./pages/mathematics/SreenandaRaut";
import OmPrakashKeshriPage from "./pages/mathematics/OmPrakashKeshri";
import HariharanSPage from "./pages/mathematics/HariharanS";
import NareshSahaPage from "./pages/mathematics/NareshSaha";
import ShilpiJainPage from "./pages/mathematics/ShilpiJain";
import SohamSwadhinPradhanPage from "./pages/mathematics/SohamSwadhinPradhan";
import PareshKumarPanigrahiPage from "./pages/mathematics/PareshKumarPanigrahi";
import JuniasJSinghPage from "./pages/mathematics/JuniasJSingh";
import MohammedSalmanMPage from "./pages/mathematics/MohammedSalmanM";
import SeethaPoojithaPage from "./pages/mathematics/SeethaPoojitha";
import SarabinduDoluiPage from "./pages/mathematics/SarabinduDolui";
import SeemaTharannumPage from "./pages/humanities-social-sciences/SeemaTharannum";
import RochnaRoyPage from "./pages/humanities-social-sciences/RochnaRoy";
import SreemathyPage from "./pages/humanities-social-sciences/Sreemathy";
import PWagdeviPage from "./pages/humanities-social-sciences/PWagdevi";
import NagendraHGPage from "./pages/humanities-social-sciences/NagendraHG";
import VanishreeRPage from "./pages/humanities-social-sciences/VanishreeR";
import MythriRPage from "./pages/humanities-social-sciences/MythriR";
import BhagyajyothiKSPage from "./pages/humanities-social-sciences/BhagyajyothiKS";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import AlumniVisionMission from "./pages/AlumniVisionMission";
import AlumniEvents from "./pages/AlumniEvents";
import AlumniNewsletter from "./pages/AlumniNewsletter";
import AlumniContact from "./pages/AlumniContact";
import Library from "./pages/Library";
import LibraryVisionMission from "./pages/LibraryVisionMission";
import LibraryTeam from "./pages/LibraryTeam";
import LibraryEResources from "./pages/LibraryEResources";
import LibraryCollections from "./pages/LibraryCollections";
import LibraryAntiPlagiarism from "./pages/LibraryAntiPlagiarism";
import LibraryRulesRegulations from "./pages/LibraryRulesRegulations";
import LibraryCorporateMembership from "./pages/LibraryCorporateMembership";
import LibraryUsefulLinks from "./pages/LibraryUsefulLinks";
import LibraryBrochure from "./pages/LibraryBrochure";
import LibraryConstituentLibraries from "./pages/LibraryConstituentLibraries";
import LibraryGallery from "./pages/LibraryGallery";
import LibraryAdvisoryCommittee from "./pages/LibraryAdvisoryCommittee";
import LibraryContact from "./pages/LibraryContact";
import NotFound from "./pages/NotFound";
import { UnifiedChatbot } from "./components/chatbot/UnifiedChatbot";
import { ChatbotFAB } from "./components/chatbot/ChatbotFAB";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import NewsDetail from "./pages/NewsDetail";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
            <Navigation />
            <main className="w-full">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/academics" element={<Academics />} />
                <Route
                  path="/academics/engineering"
                  element={<Engineering />}
                />
                <Route
                  path="/academics/engineering/newsletter"
                  element={<SoENewsletter />}
                />
                <Route path="/academics/physics" element={<Physics />} />
                <Route path="/academics/chemistry" element={<Chemistry />} />
                <Route
                  path="/academics/mathematics"
                  element={<Mathematics />}
                />
                <Route
                  path="/academics/humanities-social-sciences"
                  element={<HumanitiesSocialSciences />}
                />
                <Route
                  path="/academics/chemistry/faculty"
                  element={<ChemistryFacultyList />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-venkataramanan-n-s"
                  element={<VenkataramanaNSPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-a-v-raghu"
                  element={<AVRaghuPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-bhavana-rikhari"
                  element={<BhavanaRikhariPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-sai-prasad-nayak"
                  element={<SaiPrasadNayakPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-pradeep-kumar-badiya"
                  element={<PradeepKumarBadiyaPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-shreeganesh-subraya-hegde"
                  element={<ShreeganeshSubrayaHedgePage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-sk-habibullah"
                  element={<SKHabibullahPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-v-srinivasa-murthy"
                  element={<VSrinivasaMurthyPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-manas-barai"
                  element={<ManasBaraiPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-dipen-biswakarma"
                  element={<DipenBiswakarmaPage />}
                />
                <Route
                  path="/academics/chemistry/faculty/dr-manjodh-kaur"
                  element={<ManjudhKaurPage />}
                />
                <Route
                  path="/academics/physics/faculty"
                  element={<PhysicsFacultyList />}
                />
                <Route
                  path="/academics/physics/faculty/dr-yogesh-kalegowda"
                  element={<YogeshKalegowdaPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-m-v-hanumantha-rao"
                  element={<MVHanumannthRaoPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-k-vijaya-kumar"
                  element={<KVijayaKumarPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-rajesh-kumar"
                  element={<RajeshKumarPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-priya-sharma"
                  element={<PriyaSharmaPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-arun-kumar-singh"
                  element={<ArunKumarSinghPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-meera-patel"
                  element={<MeeraPatelPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-suresh-reddy"
                  element={<SureshReddyPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-neha-gupta"
                  element={<NehaGuptaPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-vikram-desai"
                  element={<VikramDesaiPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-anita-verma"
                  element={<AnitaVermaPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-deepak-nair"
                  element={<DeepakNairPhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-ravi-kumar-yadav"
                  element={<RaviKumarYadavPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-sweta-chatterjee"
                  element={<SwetaChatterjeePhysicsPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-rajendra-singh"
                  element={<RajendraShallowSinghPage />}
                />
                <Route
                  path="/academics/physics/faculty/dr-pooja-malhotra"
                  element={<PoojamalhotPhysicsPage />}
                />
                <Route
                  path="/academics/mathematics/faculty"
                  element={<MathematicsFacultyList />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-mahalakshmi-p"
                  element={<MahalakshmiPPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-rakesh-kumar-singh"
                  element={<RakeshKumarSinghPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-srimanta-maji"
                  element={<SrimantaMajiPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-priyanka-pandey"
                  element={<PriyankaPandeyPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-mayank-singh-bhakuni"
                  element={<MayankSinghBhakuniPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-prosanta-sarkar"
                  element={<ProsantaSarkarPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-mamatha-r-m"
                  element={<MamathaRMPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/mr-manoj-solanki"
                  element={<ManojSolankiPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-prasadini-mahapatra"
                  element={<PrasadiniMahapatraPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-shital-saha"
                  element={<ShitalSahaPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/zaffar-mehdi-dar"
                  element={<ZaffarMehdiDarPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/mr-ajay-singh-jangal"
                  element={<AjaySinghJangalPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/kruthik-p-s"
                  element={<KruthikPSPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-srikumar"
                  element={<SrikumarPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/mr-pratik-mehta"
                  element={<PratikMehtaPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-sreenanda-raut"
                  element={<SreenandaRautPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-om-prakash-keshri"
                  element={<OmPrakashKeshriPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-hariharan-s"
                  element={<HariharanSPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-naresh-saha"
                  element={<NareshSahaPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-shilpi-jain"
                  element={<ShilpiJainPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-soham-swadhin-pradhan"
                  element={<SohamSwadhinPradhanPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/dr-paresh-kumar-panigrahi"
                  element={<PareshKumarPanigrahiPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/mr-junias-j-singh"
                  element={<JuniasJSinghPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/mr-mohammed-salman-m"
                  element={<MohammedSalmanMPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/ms-seetha-poojitha"
                  element={<SeethaPoojithaPage />}
                />
                <Route
                  path="/academics/mathematics/faculty/mr-sarabindu-dolui"
                  element={<SarabinduDoluiPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty"
                  element={<HumanitiesSocialSciencesFacultyList />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/dr-seema-tharannum"
                  element={<SeemaTharannumPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/dr-rochna-roy"
                  element={<RochnaRoyPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/dr-v-sreemathy"
                  element={<SreemathyPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/dr-p-wagdevi"
                  element={<PWagdeviPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/prof-nagendra-h-g"
                  element={<NagendraHGPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/dr-vanishree-r"
                  element={<VanishreeRPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/dr-mythri-r"
                  element={<MythriRPage />}
                />
                <Route
                  path="/academics/humanities-social-sciences/faculty/dr-bhagyajyothi-k-s"
                  element={<BhagyajyothiKSPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication"
                  element={<ElectronicsCommunication />}
                />
                <Route
                  path="/academics/computer-applications"
                  element={<ComputerApplications />}
                />
                <Route
                  path="/academics/computer-applications/bca"
                  element={<BCA />}
                />
                <Route
                  path="/academics/computer-applications/data-science"
                  element={<DataScience />}
                />
                <Route
                  path="/academics/computer-applications/mca"
                  element={<MCA />}
                />
                <Route
                  path="/academics/computer-applications/msc-data-science"
                  element={<MSCDataScience />}
                />
                <Route
                  path="/academics/computer-applications/faculty"
                  element={<ComputerApplicationsFaculty />}
                />
                <Route path="/academics/law" element={<Law />} />
                <Route path="/academics/law/faculty" element={<LawFaculty />} />
                <Route
                  path="/academics/law/programs"
                  element={<LawPrograms />}
                />
                <Route
                  path="/academics/law/ba-llb-honors"
                  element={<BALLBHonors />}
                />
                <Route
                  path="/academics/law/bba-llb-honors"
                  element={<BBALLBHonors />}
                />
                <Route
                  path="/academics/law/llb-3-year"
                  element={<LLB3Year />}
                />
                <Route
                  path="/academics/law/llm-law-technology"
                  element={<LLMLawTechnology />}
                />
                <Route
                  path="/academics/law/llm-corporate-commercial"
                  element={<LLMCorporateCommercial />}
                />
                <Route
                  path="/academics/management-studies"
                  element={<ManagementStudies />}
                />
                <Route
                  path="/academics/commerce-and-management/bcom"
                  element={<BCom />}
                />
                <Route
                  path="/academics/commerce-and-management/bcom/faculty"
                  element={<BComBBAFaculty />}
                />
                <Route
                  path="/academics/commerce-and-management/bba"
                  element={<BBA />}
                />
                <Route
                  path="/academics/commerce-and-management/bba/faculty"
                  element={<BComBBAFaculty />}
                />
                <Route
                  path="/academics/commerce-and-management/mba"
                  element={<MBA />}
                />
                <Route
                  path="/academics/commerce-and-management/mba/faculty"
                  element={<MBAFaculty />}
                />
                <Route
                  path="/academics/health-sciences"
                  element={<HealthSciences />}
                />
                <Route
                  path="/academics/health-sciences/nursing"
                  element={<Nursing />}
                />
                <Route
                  path="/academics/health-sciences/physiotherapy"
                  element={<Physiotherapy />}
                />
                <Route
                  path="/academics/health-sciences/physiotherapy/faculty"
                  element={<PhysiotherapyFaculty />}
                />
                <Route
                  path="/academics/health-sciences/pharmacy"
                  element={<Pharmacy />}
                />
                <Route
                  path="/academics/health-sciences/pharmacy/faculty"
                  element={<PharmacyFaculty />}
                />
                <Route
                  path="/academics/health-sciences/b-pharm"
                  element={<BPharm />}
                />
                <Route
                  path="/academics/health-sciences/pharm-d"
                  element={<PharmD />}
                />
                <Route
                  path="/academics/health-sciences/m-pharm"
                  element={<MPharm />}
                />
                <Route
                  path="/academics/health-sciences/m-pharm-pharmaceutics"
                  element={<MPharmPharmaceutics />}
                />
                <Route
                  path="/academics/health-sciences/m-pharm-pharmacology"
                  element={<MPharmPharmacology />}
                />
                <Route
                  path="/academics/health-sciences/bpt"
                  element={<BPT />}
                />
                <Route
                  path="/academics/health-sciences/mpt"
                  element={<MPT />}
                />
                <Route
                  path="/academics/health-sciences/bsc-nursing"
                  element={<BScNursing />}
                />
                <Route
                  path="/academics/health-sciences/pb-bsc-nursing"
                  element={<PBBScNursing />}
                />
                <Route
                  path="/academics/health-sciences/msc-nursing"
                  element={<MScNursing />}
                />
                <Route
                  path="/academics/health-sciences/nursing/faculty"
                  element={<NursingFaculty />}
                />
                <Route
                  path="/academics/health-sciences/allied-health"
                  element={<AlliedHealthSciences />}
                />
                <Route
                  path="/academics/health-sciences/allied-health-bsc"
                  element={<AlliedHealthBSc />}
                />
                <Route
                  path="/academics/health-sciences/mph"
                  element={<MPH />}
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
                  path="/academics/journalism-mass-communication/ba"
                  element={<BAJournalism />}
                />
                <Route
                  path="/academics/journalism-mass-communication/faculty"
                  element={<JournalismFaculty />}
                />
                <Route
                  path="/academics/design/bdesign"
                  element={<BDesignOverview />}
                />
                <Route
                  path="/academics/design/bdesign/program"
                  element={<BDesignProgram />}
                />
                <Route
                  path="/academics/basic-applied-sciences"
                  element={<AppliedSciences />}
                />
                <Route
                  path="/academics/basic-applied-sciences/bsc-triple-major"
                  element={<BSc />}
                />
                <Route
                  path="/academics/basic-applied-sciences/msc-specializations"
                  element={<MSc />}
                />
                <Route
                  path="/academics/basic-applied-sciences/faculty"
                  element={<SBASFaculty />}
                />
                <Route
                  path="/academics/engineering/computer-science"
                  element={<DeptCSE />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence"
                  element={<DeptAIML />}
                />
                <Route
                  path="/academics/engineering/ai-ml"
                  element={<DeptAIML />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty"
                  element={<FacultyAIML />}
                />
                <Route
                  path="/academics/engineering/ai-ml/faculty"
                  element={<FacultyAIML />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-jayavrinda-vrindavanam-v"
                  element={<JayavrindasVrindavnamPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-hanumanth-sastry-sistla"
                  element={<HanumannthSastryPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-bahubali-shiragapur"
                  element={<BahubalSiragapurPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-joshuva-arockia-dhanraj"
                  element={<JoshuvaArockiaPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/prof-suresh-kandasamy"
                  element={<SureshKandasamyPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-vegi-fernando-a"
                  element={<VegiFernandoPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-vinutha-n"
                  element={<VinuthaAIMLPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-abdul-haq-nalband"
                  element={<AbdulHaqPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-prateek-verma"
                  element={<PrateekVermaPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-jitendra-jaiswal"
                  element={<JitendraJaiswalPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-mude-nagarjuna-naik"
                  element={<NagarjunaNaikPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-princy-randhawa"
                  element={<PrincyRandhawPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-sumant-kumar-mohapatra"
                  element={<SumantMohaptraPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-animesh-srivastava"
                  element={<AnimeshSrivastavPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-sumit-kumar-yadav"
                  element={<SumitYadavPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-subhash-mondal"
                  element={<SubhashMondalPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-pradeep-kumar-k"
                  element={<PradeepKumarAIMLPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-r-sriramkumar"
                  element={<SriramkumarAIMLPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mrs-mitha-guru"
                  element={<MithaGuruPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/rakshita-r"
                  element={<RakshitaAIMLPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-m-lakshmanan"
                  element={<LakshmananPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-svkr-rajeswari"
                  element={<RajeswariPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-sahil-pocker"
                  element={<SahilPockerPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-bhuvana-mohini-t-n"
                  element={<BhuvanaMohiniPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-nivetha-r"
                  element={<NiveithaAIMLPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/prof-ankita-thakkar"
                  element={<AnkitaThakkarPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/dr-sugandha-saxena"
                  element={<SughandhaSaxenaPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/prof-trupthi-rao"
                  element={<TrupthiRaoPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-govind-kumar-pandey"
                  element={<GovindPandeyPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-pragnya-pragatika-mishra"
                  element={<PragnyaMishaPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-verriboina-antony"
                  element={<VerriboinaAntonyPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-soheli-chakraborty"
                  element={<SoheliChakrabortyPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-anubrata-singharoy"
                  element={<AnubrataSingharyPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-tejal-khade"
                  element={<TejalKhadePage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-shivnandan-rai"
                  element={<ShivnandanRaiPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-partha-protim-sen"
                  element={<ParthaSenPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-arpit-kumar"
                  element={<ArpitKumarPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/mr-souvik-ghosh"
                  element={<SouvikGhoshPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-amrita-kundu"
                  element={<AmritaKunduPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-upasana-shil"
                  element={<UpasanaShilPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/ms-hairunesa-beevi"
                  element={<HairunesaBeeviPage />}
                />
                <Route
                  path="/academics/engineering/artificial-intelligence/faculty/prof-kuna-srinidhi"
                  element={<SrinidhiAIMLPage />}
                />
                <Route
                  path="/academics/engineering/ai-data-science"
                  element={<DeptAIDS />}
                />
                <Route
                  path="/academics/engineering/ai-ds"
                  element={<DeptAIDS />}
                />
                <Route
                  path="/academics/engineering/ai-data-science/faculty"
                  element={<FacultyAIDS />}
                />
                <Route
                  path="/academics/engineering/ai-ds/faculty"
                  element={<FacultyAIDS />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering"
                  element={<DeptMechanical />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty"
                  element={<FacultyMechanical />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty/dr-saravana-bavan-d"
                  element={<SaravanaBavanDPage />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty/dr-viswanathan-r"
                  element={<ViswanathanRMechPage />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty/dr-vinayak-b-hemadri"
                  element={<VinayakBHemadriPage />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty/dr-rahul-kumar"
                  element={<RahulKumarMechPage />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty/dr-shashidhara-l-c"
                  element={<ShashidharaLCPage />}
                />
                <Route
                  path="/academics/engineering/mechanical-engineering/faculty/abhijith-n"
                  element={<AbhijithNPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering"
                  element={<DeptAerospace />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty"
                  element={<FacultyAerospace />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-nagaraja-s-r"
                  element={<DrNagarajaSRPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-b-v-n-ramakumar"
                  element={<DrBVNRamakumarPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-prashantha-kumar"
                  element={<DrPrashantheKumarPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-avinash-kumar-saurav"
                  element={<DrAvinashKumarSauravPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/prof-sripad-kulkarni"
                  element={<ProfSripadKulkarniPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-ajey-singh"
                  element={<DrAjeySinghPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-g-k-suryanarayana"
                  element={<DrGKSuryanarayanaPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-mathew-chacko"
                  element={<DrMathewChackoPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-kartik-s-tandel"
                  element={<DrKartikSTandelPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-srinath-ramakrishnan"
                  element={<DrSrinathRamakrishnanPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/ms-swagatika"
                  element={<MsSwagatikaPage />}
                />
                <Route
                  path="/academics/engineering/aerospace-engineering/faculty/dr-vivek-anand"
                  element={<DrVivekAnandPage />}
                />
                <Route
                  path="/academics/engineering/ai-robotics"
                  element={<DeptAIRobotics />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty"
                  element={<FacultyAIRobotics />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty/dr-pramod-kumar-naik"
                  element={<DrPramodKumarNaikPage />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty/dr-rupam-bhaduri"
                  element={<DrRupamBhaduriPage />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty/dr-gangadhar-t-g"
                  element={<DrGangadharTGPage />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty/dr-bharath-kumar-s"
                  element={<DrBharathKumarSPage />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty/mr-vikas-vishwakarma"
                  element={<MrVikasVishwakarmaPage />}
                />
                <Route
                  path="/academics/engineering/ai-robotics/faculty/mr-lalit-ashutosh"
                  element={<MrLalitAshutoshPage />}
                />
                <Route
                  path="/academics/engineering/data-science"
                  element={<DeptDataScience />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty"
                  element={<FacultyDataScience />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/dr-shaila-s-g"
                  element={<DrShailaSGPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/dr-santhosh-kumar-g"
                  element={<DrSanthoshKumarGPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/dr-suresh-arumugam"
                  element={<DrSureshArumugamPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/dr-u-pavan-kumar"
                  element={<DrUPavanKumarPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/shivamma-d"
                  element={<ShivammaDPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/monish-l"
                  element={<MonishLPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/manjula-m"
                  element={<ManjulaPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/sindhu-a"
                  element={<SindhuAPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/mr-godhandaraman-t"
                  element={<MrGodhandaramanTPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/prof-chandrakala-l"
                  element={<ProfChandrakalaLPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/prof-prapti-bhattacharjee"
                  element={<ProfPraptiBhattachareePage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/mr-mithun-kumar"
                  element={<MrMithunKumarPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/mr-megha-chandel"
                  element={<MrMeghaChandelPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/mr-kishor-malakar"
                  element={<MrKishorMalakarPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/mr-shashank-shekhar"
                  element={<MrShashankShekharPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/ms-souramita-bhowmik"
                  element={<MsSouramitaBhowmikPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/mr-mriganka-das"
                  element={<MrMrigankaDasPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/ms-snigdha-sikha-kashyap"
                  element={<MsSnigdhaSikhakashyapPage />}
                />
                <Route
                  path="/academics/engineering/data-science/faculty/dr-jobin-thomas"
                  element={<DrJobinThomasPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity"
                  element={<DeptCybersecurity />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty"
                  element={<FacultyCybersecurity />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-dilip-kumar-jang-bahadur-saini"
                  element={<DrDilipKumarJangBahadurSainiPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-durbadal-chattaraj"
                  element={<DrDurbadalChattarajPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-prajwalasimha-s-n"
                  element={<DrPrajwalasimhaSNPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-mubeen-ahmed-khan"
                  element={<DrMubeenAhmedKhanPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/naveen-kulkarni"
                  element={<NaveenKulkarniPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/sharanabasappa-tadkal"
                  element={<SharanabasappaTadkalPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/deepthika-karuppusamy"
                  element={<DeepthikaKaruppusamyPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/mr-biswajit-debnath"
                  element={<MrBiswajitDebnathPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/mr-joshe-raj"
                  element={<MrJosheRajPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-dsumathi"
                  element={<DrDSumathiPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-g-hemanth-kumar"
                  element={<DrGHemanthKumarPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-devipriya-v-s"
                  element={<DrDevipriyaVSPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/dr-indushree-m"
                  element={<DrIndushreeMPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/vinitha-v"
                  element={<ViníthaVPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/ranjima-p"
                  element={<RanjimaPPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/ms-sayeli-dey"
                  element={<MsSayeliDeyPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/ms-archita-bhattacharyya"
                  element={<MsArchitaBhattacharyyaPage />}
                />
                <Route
                  path="/academics/engineering/cybersecurity/faculty/prof-g-n-v-prasad"
                  element={<ProfGNVPrasadPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty"
                  element={<FacultyECE />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty/dr-puttamadappa-c"
                  element={<PuttamadappaECEPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty/dr-arun-balodi"
                  element={<ArunBalodiPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty/dr-s-n-prasad"
                  element={<SNPrasadECEPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty/dr-s-arungalai-vendan"
                  element={<ArungalaiVendanPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty/dr-s-k-srivastava"
                  element={<SKSrivastavaECEPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty/dr-theodore-chandra-s"
                  element={<TheodoreChandraPage />}
                />
                <Route
                  path="/academics/engineering/electronics-communication/faculty/:slug"
                  element={<ECEFacultyProfile />}
                />
                <Route
                  path="/academics/engineering/cs-medical-engineering"
                  element={<MedicalEngineering />}
                />
                <Route
                  path="/academics/engineering/cs-medical-engineering/faculty"
                  element={<FacultyMedicalEngineering />}
                />
                <Route
                  path="/academics/engineering/cs-medical-engineering/faculty/dr-rajesh-tm"
                  element={<RajeshTMPage />}
                />
                <Route
                  path="/academics/engineering/cs-medical-engineering/faculty/prof-pruthvi-patel"
                  element={<PruthviPatelPage />}
                />
                <Route
                  path="/academics/engineering/computer-technology/faculty/:slug"
                  element={<ComputerTechnologyFacultyProfile />}
                />
                <Route
                  path="/academics/engineering/computer-technology"
                  element={<DeptComputerTechnology />}
                />
                <Route
                  path="/academics/engineering/computer-technology/faculty"
                  element={<FacultyComputerTechnology />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty"
                  element={<FacultyCSE />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-girisha-g-s"
                  element={<GirishaGSPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-udaya-kumar-reddy-k-r"
                  element={<UdayaKumarReddyPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-bipin-kumar-rai"
                  element={<BipinKumarRaiPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-revathi-v"
                  element={<RevathiVPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-basavaraj-n-hiremath"
                  element={<BasavarajNHiremathPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/natarajan-venkateswaran"
                  element={<NatarajanVenkateswaranPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-bondu-venkateswarlu"
                  element={<BonduVenkateswarluPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-s-k-mouleeswaran"
                  element={<SKMouleeswaranPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-vengatesan-krishnasamy"
                  element={<VengatesanKrishnasamyPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-george-fernandez-i"
                  element={<GeorgeFernandezPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-shashikiran-v"
                  element={<ShashikiranVPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-tanvir-habib-sardar"
                  element={<TanvirHabibSardarPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-gousia-thahniyath"
                  element={<GousiaThahniyathPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-n-bharathiraja"
                  element={<NBharathirajaPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-rupam-bhagawati"
                  element={<RupamBhagawatiPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-a-senthil-kumar"
                  element={<ASenthilKumarPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-j-sebastian-nixon"
                  element={<JSebastianNixonPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-prabhakar-m"
                  element={<PrabhakarMPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-ramesh-s"
                  element={<RameshSPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-meenakshi-malhotra"
                  element={<MeenakshiMalhotraPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-praveen-kulkarni"
                  element={<PraveenKulkarniPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-savitha-hiremath"
                  element={<SavithaHiremathPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-sridhar-s-k"
                  element={<SridharSKPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-arunkumar-gopu"
                  element={<ArunkumarGopuPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-kumar-dilip"
                  element={<KumarDilipPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-jeeva-s"
                  element={<JeevaSPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-renuka-devi-mn"
                  element={<RenukaDeviPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/prof-arjun-krishnamurthy"
                  element={<ArjunKrishnamurthyPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-gokulakrishnan-s"
                  element={<GokulakrishnanPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/sowmya-h-d"
                  element={<SowmyaHDPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/shreekant-salotagi"
                  element={<ShreekantSalotagiPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/chethan-k-s"
                  element={<ChethanKSPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/yashaswini"
                  element={<YashaswinePage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/roshan-sanu-y"
                  element={<RoshanSanuPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/mohammed-javaid"
                  element={<MohammedJavaidPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-pannangi-naresh"
                  element={<PannangiNareshPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-damodharan-d"
                  element={<DamodharanDPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/dr-chetan-v"
                  element={<ChetanVPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/soham-ghosh"
                  element={<SohamGhoshPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/pavithra-d"
                  element={<PavithraDPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/annapurna-shobitha-s"
                  element={<AnnapurnaShobilthaPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/smriti-bharti"
                  element={<SmritiBartiPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/soumadip-mondal"
                  element={<SoumadipMondalPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/ritik-chhatwani"
                  element={<RitikChhatwaniPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/shivani"
                  element={<ShivaniPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/ms-sweta-chopdar"
                  element={<SwetaChopdarPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/manas-singha"
                  element={<ManasSinghaPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/mayank-kumar"
                  element={<MayankKumarPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/praveen-gopal-gaonkar"
                  element={<PraveenGopalGaonkarPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/preeti-gajdhane"
                  element={<PreetiGajdhanePage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/priya-pudke"
                  element={<PriyaPudkePage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/raunit-maurya"
                  element={<RaunitMauryaPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/rohit-kumar-singh"
                  element={<FacultyRohitKumarSingh />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/rupam-sah"
                  element={<RupamSahPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/shahid-raza"
                  element={<ShahidRazaPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/sonali-bairagi"
                  element={<SonaliBairsgiPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/trinadh-singampalli"
                  element={<TrinadhSingampalliPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/nandini-k"
                  element={<NandiniKPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/pooja-shree-h-r"
                  element={<PoojaShreeHRPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/kavyashree-i-pattan"
                  element={<KavyashreeIPattanPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/santhosh-m"
                  element={<SanthoshMPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/naitik-s-t"
                  element={<NaitikSTPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/sasikala-n"
                  element={<SasikalaNPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/radhika-k"
                  element={<RadhikaKPage />}
                />
                <Route
                  path="/academics/engineering/computer-science/faculty/benaka-santhosha-s"
                  element={<BenakaSanthoshaPage />}
                />
                <Route
                  path="/faculty/rajesh-kumar"
                  element={<RajeshKumarProfile />}
                />
                <Route
                  path="/faculty-directory"
                  element={<FacultyDirectory />}
                />
                <Route path="/admissions" element={<Admissions />} />
                <Route
                  path="/admissions/international"
                  element={<InternationalAdmissions />}
                />
                <Route
                  path="/admissions/closing-dates"
                  element={<AdmissionClosingDates />}
                />
                <Route
                  path="/international-affairs"
                  element={<InternationalAffairs />}
                />
                <Route path="/study-in-india" element={<StudyInIndia />} />
                <Route path="/eligibility" element={<Eligibility />} />
                <Route
                  path="/program-lookup"
                  element={<SimpleProgramLookup />}
                />
                <Route path="/placements" element={<Placements />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/campus-life" element={<CampusLife />} />
                <Route path="/events" element={<Events />} />
                <Route path="/test-announcements" element={<TestAnnouncements />} />
                <Route path="/examinations" element={<Examinations />} />
                <Route path="/research" element={<Research />} />
                <Route path="/ai-first" element={<AIFirst />} />
                <Route
                  path="/nvidia-ai-architecture"
                  element={<NVIDIAArchitecture />}
                />
                <Route path="/about" element={<About />} />
                <Route
                  path="/about/vision-mission"
                  element={<VisionMission />}
                />
                <Route path="/about/history" element={<History />} />
                <Route
                  path="/contact-complaints"
                  element={<ContactComplaints />}
                />
                <Route
                  path="/anti-ragging-cell"
                  element={<AntiRaggingCell />}
                />
                <Route path="/about/leadership" element={<Leadership />} />
                <Route
                  path="/about/board-of-governors"
                  element={<BoardOfGovernors />}
                />
                <Route
                  path="/about/board-of-management"
                  element={<BoardOfManagement />}
                />
                <Route
                  path="/about/finance-committee"
                  element={<FinanceCommittee />}
                />
                <Route
                  path="/about/academic-council"
                  element={<AcademicCouncil />}
                />
                <Route
                  path="/about/research-innovation-council"
                  element={<ResearchInnovationCouncil />}
                />
                <Route
                  path="/about/accreditations"
                  element={<Accreditations />}
                />
                <Route path="/about/facilities" element={<Facilities />} />
                <Route
                  path="/centre-of-excellence"
                  element={<CentreOfExcellence />}
                />
                <Route path="/iqac" element={<IQAC />} />
                {/* Alumni Routes */}
                <Route path="/alumni" element={<Alumni />} />
                <Route
                  path="/alumni/vision-mission"
                  element={<AlumniVisionMission />}
                />
                <Route path="/alumni/events" element={<AlumniEvents />} />
                <Route
                  path="/alumni/newsletter"
                  element={<AlumniNewsletter />}
                />
                <Route path="/alumni/contact" element={<AlumniContact />} />
                {/* Library Routes */}
                <Route path="/library" element={<Library />} />
                <Route
                  path="/library/vision-mission"
                  element={<LibraryVisionMission />}
                />
                <Route path="/library/team" element={<LibraryTeam />} />
                <Route
                  path="/library/e-resources"
                  element={<LibraryEResources />}
                />
                <Route
                  path="/library/collections"
                  element={<LibraryCollections />}
                />
                <Route
                  path="/library/anti-plagiarism"
                  element={<LibraryAntiPlagiarism />}
                />
                <Route
                  path="/library/rules-regulations"
                  element={<LibraryRulesRegulations />}
                />
                <Route
                  path="/library/corporate-membership"
                  element={<LibraryCorporateMembership />}
                />
                <Route
                  path="/library/useful-links"
                  element={<LibraryUsefulLinks />}
                />
                <Route path="/library/brochure" element={<LibraryBrochure />} />
                <Route
                  path="/library/constituent-libraries"
                  element={<LibraryConstituentLibraries />}
                />
                <Route path="/library/gallery" element={<LibraryGallery />} />
                <Route
                  path="/library/advisory-committee"
                  element={<LibraryAdvisoryCommittee />}
                />
                <Route path="/library/contact" element={<LibraryContact />} />
                {/* Redirect /engineering/* paths to /academics/engineering/* */}
                <Route
                  path="/engineering/*"
                  element={
                    <Navigate
                      to={`/academics${window.location.pathname}`}
                      replace
                    />
                  }
                />
                {/* Detail pages for Announcements, News, and Events */}
                <Route path="/announcement/:id" element={<AnnouncementDetail />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/event/:id" element={<EventDetail />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <ChatbotFAB />
          <UnifiedChatbot />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

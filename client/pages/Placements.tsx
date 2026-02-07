import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Building2,
  Target,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Zap,
  Lightbulb,
  ChevronDown,
  FileText,
  Code,
  Brain,
  Handshake,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function Placements() {
  const [expandedSchools, setExpandedSchools] = useState<
    Record<string, boolean>
  >({});
  const [expandedSector, setExpandedSector] = useState<Record<string, boolean>>(
    {
      soe: true,
      cms: true,
      sbas: true,
      sohs: true,
      soadh: true,
      intl: true,
      mou: true,
    },
  );

  const { elementRef: statsRef, isVisible: statsVisible } = useScrollTrigger();
  const { elementRef: outcomesRef, isVisible: outcomesVisible } =
    useScrollTrigger();
  const { elementRef: pillarsRef, isVisible: pillarsVisible } =
    useScrollTrigger();
  const { elementRef: storiesRef, isVisible: storiesVisible } =
    useScrollTrigger();
  const { elementRef: recruitersRef, isVisible: recruitersVisible } =
    useScrollTrigger();

  const toggleSchool = (schoolKey: string) => {
    setExpandedSchools((prev) => ({
      ...prev,
      [schoolKey]: !prev[schoolKey],
    }));
  };

  const toggleSector = (sectorKey: string) => {
    setExpandedSector((prev) => ({
      ...prev,
      [sectorKey]: !prev[sectorKey],
    }));
  };

  const placementData = [
    {
      key: "soe",
      name: "School of Engineering",
      programs: "BE/B.Tech, M.Tech",
      batches: [
        {
          year: "2025",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2025_RP.pdf",
        },
        {
          year: "2024",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2024.pdf",
        },
        {
          year: "2023",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2023_1.pdf",
        },
        {
          year: "2022",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2022.pdf",
        },
        {
          year: "2021",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2021.pdf",
        },
        {
          year: "2020",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2020.pdf",
        },
        {
          year: "2019",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOE/soe_2019.pdf",
        },
      ],
    },
    {
      key: "cms",
      name: "School of Commerce & Management Studies",
      programs: "BBA, MBA, B.Com, M.Com",
      batches: [
        {
          year: "2025",
          link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/Campus_placement_website_2025_School_of_Commerce__Mgt.pdf",
        },
        {
          year: "2024",
          link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/Campus_placement_website_2024_School_of_Commerce__Mgt.pdf",
        },
        {
          year: "2023",
          link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2023.pdf",
        },
        {
          year: "2022",
          link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2022.pdf",
        },
        {
          year: "2021",
          link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2021.pdf",
        },
        {
          year: "2020",
          link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2020.pdf",
        },
        {
          year: "2019",
          link: "https://www.dsu.edu.in/images/placements/Hiring/CMS/cms_2019.pdf",
        },
      ],
    },
    {
      key: "sbas",
      name: "School of Basic & Applied Sciences",
      programs: "B.Sc, M.Sc",
      batches: [
        {
          year: "2024",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2024.pdf",
        },
        {
          year: "2023",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2023.pdf",
        },
        {
          year: "2022",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2022.pdf",
        },
        {
          year: "2021",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2021.pdf",
        },
        {
          year: "2020",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2020.pdf",
        },
        {
          year: "2019",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SBAS/sbas_2019.pdf",
        },
      ],
    },
    {
      key: "sohs",
      name: "School of Health Sciences",
      programs: "Nursing, Pharmacy, Physiotherapy",
      subCategories: [
        {
          name: "Nursing",
          batches: [
            {
              year: "2024",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2024_CONS.pdf",
            },
            {
              year: "2023",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2023_CONS.pdf",
            },
            {
              year: "2022",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2022_CONS.pdf",
            },
            {
              year: "2021",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/nursing_2021.pdf",
            },
            {
              year: "2020",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/nursing_2020.pdf",
            },
            {
              year: "2019",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/nursing_2019.pdf",
            },
          ],
        },
        {
          name: "Pharmacy",
          batches: [
            {
              year: "2024",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website__COPS_2024.pdf",
            },
            {
              year: "2023",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2023.pdf",
            },
            {
              year: "2022",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2022.pdf",
            },
            {
              year: "2021",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2021.pdf",
            },
            {
              year: "2020",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2020.pdf",
            },
            {
              year: "2019",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/pharmacy_2019.pdf",
            },
          ],
        },
        {
          name: "Physiotherapy",
          batches: [
            {
              year: "2024",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/Campus_placement_website_2024__PHYSIOTHERAPY.pdf",
            },
            {
              year: "2023",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2023.pdf",
            },
            {
              year: "2022",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2022.pdf",
            },
            {
              year: "2021",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2021.pdf",
            },
            {
              year: "2020",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2020.pdf",
            },
            {
              year: "2019",
              link: "https://www.dsu.edu.in/images/placements/Hiring/SOHS/physio_2019.pdf",
            },
          ],
        },
      ],
    },
    {
      key: "soadh",
      name: "School of Arts, Design & Humanities",
      programs: "BA (JMC), B.Design",
      batches: [
        {
          year: "2024",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2024.pdf",
        },
        {
          year: "2023",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2023.pdf",
        },
        {
          year: "2022",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2022.pdf",
        },
        {
          year: "2021",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2021.pdf",
        },
        {
          year: "2020",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOADH/soadh_2020.pdf",
        },
      ],
    },
    {
      key: "soca",
      name: "School of Computer Application",
      programs: "BCA, MCA",
      batches: [
        {
          year: "2025",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOCA/soca_2025.pdf",
        },
        {
          year: "2024",
          link: "https://www.dsu.edu.in/images/placements/Hiring/SOCA/soca_2024.pdf",
        },
      ],
    },
  ];

  const recruitersBySchool = {
    soe: {
      name: "School of Engineering",
      icon: Building2,
      recruiters: [
        {
          name: "Logo 1",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1fd6f477dc64481abe276a3fd33ef046?format=webp&width=800",
        },
        {
          name: "Logo 2",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F56fe2bf379f84dbeb2e24c5af7fdb51b?format=webp&width=800",
        },
        {
          name: "Logo 3",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F779fdb29f4544b3ea7d528b0a75eb92c?format=webp&width=800",
        },
        {
          name: "Logo 4",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa06309789c5a4ccf9bbf66fdc4526f71?format=webp&width=800",
        },
        {
          name: "Logo 5",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F84c117b53d30497888dc0eda95b81bdc?format=webp&width=800",
        },
        {
          name: "Logo 6",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc079e39dc01546bfbea1364ff627cd0f?format=webp&width=800",
        },
        {
          name: "Logo 7",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4c6423df114b417e8f131a64a2c41ec6?format=webp&width=800",
        },
        {
          name: "Logo 8",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4ff9e2538d1a472c9feb21852e32c5ce?format=webp&width=800",
        },
        {
          name: "Logo 9",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0ec93afdab7b4ad8846c510d97b24395?format=webp&width=800",
        },
        {
          name: "Logo 10",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fca2364908f50463d93dc5c71ebf3838e?format=webp&width=800",
        },
        {
          name: "Logo 11",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd51e6b821589466e9103cd72de860fc9?format=webp&width=800",
        },
        {
          name: "Logo 12",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F690c1a76d01f4a57b8c5b8cd610a9ce5?format=webp&width=800",
        },
        {
          name: "Logo 13",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8c7eda9d6f264aaeab200febfbd65bef?format=webp&width=800",
        },
        {
          name: "Logo 14",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feabd42fd06b84db3bb2dd34cfd4db415?format=webp&width=800",
        },
        {
          name: "Logo 15",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fef238b2d95f843e99f89d64074176490?format=webp&width=800",
        },
        {
          name: "Logo 16",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb17227fd99ff43eba842419c9aaafa5c?format=webp&width=800",
        },
        {
          name: "Logo 17",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb6167ea0058d4ef69191a98a1d23c694?format=webp&width=800",
        },
        {
          name: "Logo 18",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3886e61c6cdf43098c147a62b868ac8d?format=webp&width=800",
        },
        {
          name: "Logo 19",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe6bf63a0e6ef4455b24d2ac3acf3659f?format=webp&width=800",
        },
        {
          name: "Logo 20",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6a2c4f72758b42acb31fa9d8d501ad51?format=webp&width=800",
        },
        {
          name: "Logo 21",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff5a9bdb958f545f7b71b8fa466ae396a?format=webp&width=800",
        },
        {
          name: "Logo 22",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fdebd05df321b4e2d9636725697cfcf5e?format=webp&width=800",
        },
        {
          name: "Logo 23",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F153cfdca34574416b2948b580efc3421?format=webp&width=800",
        },
        {
          name: "Logo 24",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1feac0d1a7414f10a25d2944fe5e8408?format=webp&width=800",
        },
        {
          name: "Logo 25",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6205b8cbaf3b42ba9c3f665d80b1ecb5?format=webp&width=800",
        },
        {
          name: "Logo 26",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fff87acfe2c494d478132a9fab8bd0a67?format=webp&width=800",
        },
        {
          name: "Logo 27",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F931ec082d95a46819f9855e91db10edd?format=webp&width=800",
        },
        {
          name: "Logo 28",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0a7132bccf8e49e4b3482066ed403bfd?format=webp&width=800",
        },
        {
          name: "Logo 29",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F78aa85f189e64d66b379f30e264a4de4?format=webp&width=800",
        },
        {
          name: "Logo 30",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6cd8aa4448bb49978a861b66cf3a1de8?format=webp&width=800",
        },
        {
          name: "Logo 31",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5d831d4ad32c4cba9df3b341fff6acd6?format=webp&width=800",
        },
        {
          name: "Logo 32",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4ae51ca9249145cea5a9b4f3cabc87a3?format=webp&width=800",
        },
        {
          name: "Logo 33",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F56e05faa0878479f910a2603a98f8234?format=webp&width=800",
        },
        {
          name: "Logo 34",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd1548044cf9a4444b7229da78c066690?format=webp&width=800",
        },
        {
          name: "Logo 35",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F59c5fc6bdfb94618b3ea02266a9eda5c?format=webp&width=800",
        },
        {
          name: "Logo 36",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F877e5306def646ee98ae5c9a740b016f?format=webp&width=800",
        },
        {
          name: "Logo 37",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1d6f94cdbd2848fc83f4153e2a5e590f?format=webp&width=800",
        },
        {
          name: "Logo 38",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fae735b17ca714bfe80bcf3df2198e021?format=webp&width=800",
        },
        {
          name: "Logo 39",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6530c32583ae42249b37b1587a7c0165?format=webp&width=800",
        },
        {
          name: "Logo 40",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8c6f41bff14e4d6ca64a7d1074df3013?format=webp&width=800",
        },
        {
          name: "Logo 41",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fdd23585204c441ebbeeed1e477516936?format=webp&width=800",
        },
        {
          name: "Logo 42",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3eeede5befbf4c07920ee1bbf8584451?format=webp&width=800",
        },
        {
          name: "Logo 43",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2b66c0bd78874f499ae07af50976592b?format=webp&width=800",
        },
        {
          name: "Logo 44",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe6ea7c2665694f11b6d5069df4ef5300?format=webp&width=800",
        },
        {
          name: "Logo 45",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc8540b0ac9d24844ad9e68264c122081?format=webp&width=800",
        },
        {
          name: "Logo 46",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1add4f16e58f415d93405e0974adcdc7?format=webp&width=800",
        },
        {
          name: "Logo 47",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9ca6fb24aa03441d890316b0d7dcfe40?format=webp&width=800",
        },
        {
          name: "Logo 48",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fdf69bea2803e46469eb335cac2e9d77f?format=webp&width=800",
        },
        {
          name: "Logo 49",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F80c3f66c1d7142a5b933fa85de94b91b?format=webp&width=800",
        },
        {
          name: "Logo 50",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F55701aca9dfb46369c9c50ca77f7cd1e?format=webp&width=800",
        },
        {
          name: "Logo 51",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbc122d31a8454e74911a35c9b355c4b6?format=webp&width=800",
        },
        {
          name: "Logo 52",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe0c9d64ffa454de8be0565c4c9cf722c?format=webp&width=800",
        },
        {
          name: "Logo 53",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F934243373fe6435fba5d98d8be93300a?format=webp&width=800",
        },
        {
          name: "Logo 54",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F374b0200289149fdbb356e57ca132a05?format=webp&width=800",
        },
        {
          name: "Logo 55",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F471bb1cd92c14e57818282e01d20e874?format=webp&width=800",
        },
        {
          name: "Logo 56",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F575465e349fe4b44a55b7e93fac60470?format=webp&width=800",
        },
        {
          name: "Logo 57",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa767073a5ab9483c9a664777f6db3e82?format=webp&width=800",
        },
        {
          name: "Logo 58",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F517e2613aea641d5b5f636baef7b311f?format=webp&width=800",
        },
        {
          name: "Logo 59",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F62d25891346e408580848b0b824ffa6f?format=webp&width=800",
        },
        {
          name: "Logo 60",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe45faa21fa7a49c69d3acd84568e7651?format=webp&width=800",
        },
        {
          name: "Logo 61",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1066c760a49c40289d12e26e51408f39?format=webp&width=800",
        },
        {
          name: "Logo 62",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2def30750ef7451086c47f2c344baf05?format=webp&width=800",
        },
        {
          name: "Logo 63",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0c9437af6db14b58891efbf22c4c0845?format=webp&width=800",
        },
        {
          name: "Logo 64",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff3a6094793a74a54852a21960594929d?format=webp&width=800",
        },
        {
          name: "Logo 65",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1ad94222c05245589ef93be5dfc738d6?format=webp&width=800",
        },
        {
          name: "Logo 66",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1493293e2c8a419ca859fa94b274b412?format=webp&width=800",
        },
        {
          name: "Logo 67",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F85b4483199ff43709e35950174ce2219?format=webp&width=800",
        },
        {
          name: "Logo 68",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feee66bea3041466bb25264cc10f7c16b?format=webp&width=800",
        },
        {
          name: "Logo 69",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2371c327d414465fb62e652c6fdb4d94?format=webp&width=800",
        },
        {
          name: "Logo 70",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fabf686a4fe864a26996a1bb9e55ddd22?format=webp&width=800",
        },
        {
          name: "Logo 71",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6b196a3179094c09877b4fb78cb9c170?format=webp&width=800",
        },
        {
          name: "Logo 72",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb7f4da6dffd543ae8c56e84e06ae6aa8?format=webp&width=800",
        },
        {
          name: "Logo 73",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0386c01a787942e9a9d68b78c7f582c5?format=webp&width=800",
        },
        {
          name: "Logo 74",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0aa77e8f8b284c7f99e0647e50aa7478?format=webp&width=800",
        },
        {
          name: "Logo 75",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F79f6370b4ef645e5814673b18b6b6bba?format=webp&width=800",
        },
        {
          name: "Logo 76",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa0eec134f0e84f5a8daf9562fc7dea51?format=webp&width=800",
        },
        {
          name: "Logo 77",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ffaf2ecaaa7dc4de893356111b928df05?format=webp&width=800",
        },
        {
          name: "Logo 78",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1472f169a432484a86930c1f87b1d9db?format=webp&width=800",
        },
        {
          name: "Logo 79",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F28bfdf248deb411b8a2ab4161973cd87?format=webp&width=800",
        },
        {
          name: "Logo 80",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4ef407a394754a68ab02a6ca7d3ac0df?format=webp&width=800",
        },
        {
          name: "Logo 81",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4279d64cc5014ed780251b55a395cb0e?format=webp&width=800",
        },
        {
          name: "Logo 82",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3eb30563fcc8468ea5270003656cdad9?format=webp&width=800",
        },
        {
          name: "Logo 83",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8fb1d6263c564aa898fca7318dd55894?format=webp&width=800",
        },
        {
          name: "Logo 84",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F81f1a03628384aab802f78555b4c63a3?format=webp&width=800",
        },
        {
          name: "Logo 85",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2d7251cb6b734bb2aabb6f25f53cd39d?format=webp&width=800",
        },
        {
          name: "Logo 86",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa7724a05fdae484fa33ee4604085d8e1?format=webp&width=800",
        },
        {
          name: "Logo 87",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa04f39ede3d141eca4738f31508c79ca?format=webp&width=800",
        },
        {
          name: "Logo 88",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F569b018fcd584115b36def721bd1769b?format=webp&width=800",
        },
        {
          name: "Logo 89",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F54d64add5d11455db7067b0b7a456a98?format=webp&width=800",
        },
        {
          name: "Logo 90",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9e5e8868ecd7425c9c37ae6729ba72ed?format=webp&width=800",
        },
        {
          name: "Logo 91",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F89762d7e13cc49518b45e56ac6c35866?format=webp&width=800",
        },
        {
          name: "Logo 92",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3fca96a8c6084cd8998292f52203dffc?format=webp&width=800",
        },
        {
          name: "Logo 93",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff7ae50033ee04a36b8dd46acafc6c076?format=webp&width=800",
        },
        {
          name: "Logo 94",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa56adeebc2d3483fb0382d939788acad?format=webp&width=800",
        },
        {
          name: "Logo 95",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fcf2cd17ba79c4f41b0369dcd605a934f?format=webp&width=800",
        },
        {
          name: "Logo 96",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7ebc5ad2f84c4d38be898752854556f7?format=webp&width=800",
        },
        {
          name: "Logo 97",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc95b7e1b747544a4846ff8b6d0abc3df?format=webp&width=800",
        },
        {
          name: "Logo 98",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F023dc2ebc3b24fc3920ec3251e762247?format=webp&width=800",
        },
        {
          name: "Logo 99",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8f4e42526e344e1793bc83c2ee797750?format=webp&width=800",
        },
        {
          name: "Logo 100",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F559c4fde6e4947298c20b068db242ab6?format=webp&width=800",
        },
        {
          name: "Logo 101",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3e5997655b384b19a8cdac6b0710f91c?format=webp&width=800",
        },
        {
          name: "Logo 102",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fef1ba4e053aa49ea9c774c70c51585fd?format=webp&width=800",
        },
        {
          name: "Logo 103",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2a52de68da5f4cf79ed594c4e78a7cf6?format=webp&width=800",
        },
        {
          name: "Logo 104",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7eb067e3467b46619fc6e2c3b05b4486?format=webp&width=800",
        },
        {
          name: "Logo 105",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd90430162bc04822b5fae6ae23f872c5?format=webp&width=800",
        },
        {
          name: "Logo 106",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F28826edc06f14903bbac33952dfe9f56?format=webp&width=800",
        },
        {
          name: "Logo 107",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fac25e701a28342b5ba77ca0aaac6daf0?format=webp&width=800",
        },
        {
          name: "Logo 108",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fcff33dffdf2f4e7fb310595817dc9946?format=webp&width=800",
        },
      ],
    },
    cms: {
      name: "School of Commerce & Management Studies",
      icon: Briefcase,
      recruiters: [
        { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
        { name: "PWC", logo: "https://logo.clearbit.com/pwc.com" },
        { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
        { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
        {
          name: "Goldman Sachs",
          logo: "https://logo.clearbit.com/goldmansachs.com",
        },
        {
          name: "Morgan Stanley",
          logo: "https://logo.clearbit.com/morganstanley.com",
        },
        { name: "ICICI Bank", logo: "https://logo.clearbit.com/icicibank.com" },
        { name: "HDFC Bank", logo: "https://logo.clearbit.com/hdfcbank.com" },
        { name: "Axis Bank", logo: "https://logo.clearbit.com/axisbank.com" },
        { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
        { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
      ],
    },
    sbas: {
      name: "School of Basic & Applied Sciences",
      icon: Code,
      recruiters: [
        { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
        {
          name: "Anand Diagnostic Laboratory",
          logo: "https://logo.clearbit.com/anandlab.com",
        },
        {
          name: "Anderson Diagnostics",
          logo: "https://logo.clearbit.com/andersondiagnostics.com",
        },
        {
          name: "Anthem BioSciences",
          logo: "https://logo.clearbit.com/anthembio.com",
        },
        { name: "ARTECH", logo: "https://logo.clearbit.com/artech.co.in" },
        { name: "AugMedix", logo: "https://logo.clearbit.com/augmedix.com" },
        { name: "Bencos", logo: "https://logo.clearbit.com/bencos.com" },
        { name: "Bionova", logo: "https://logo.clearbit.com/bionova.com" },
        { name: "Bioneeds", logo: "https://logo.clearbit.com/bioneeds.com" },
        { name: "BYJU'S", logo: "https://logo.clearbit.com/byjus.com" },
        { name: "Canopus", logo: "https://logo.clearbit.com/canopus.co.in" },
        { name: "Carelon", logo: "https://logo.clearbit.com/carelon.com" },
        { name: "Celegence", logo: "https://logo.clearbit.com/celegence.com" },
        { name: "Cerner", logo: "https://logo.clearbit.com/cerner.com" },
        { name: "CIIRC", logo: "https://logo.clearbit.com/ciirc.org" },
        { name: "Clarivate", logo: "https://logo.clearbit.com/clarivate.com" },
        { name: "Codeyoung", logo: "https://logo.clearbit.com/codeyoung.com" },
        { name: "Covance", logo: "https://logo.clearbit.com/covance.com" },
        { name: "Eli Lilly", logo: "https://logo.clearbit.com/lilly.com" },
        { name: "Episource", logo: "https://logo.clearbit.com/episource.com" },
        { name: "Ferticare", logo: "https://logo.clearbit.com/ferticare.com" },
        { name: "FibroHeal", logo: "https://logo.clearbit.com/fibroheal.com" },
        { name: "GHA", logo: "https://logo.clearbit.com/gha.org.in" },
        { name: "GROWTHhub", logo: "https://logo.clearbit.com/growththub.io" },
        { name: "GSK", logo: "https://logo.clearbit.com/gsk.com" },
        {
          name: "HealthPlix",
          logo: "https://logo.clearbit.com/healthplix.com",
        },
        {
          name: "HealthMinds",
          logo: "https://logo.clearbit.com/healthminds.in",
        },
        { name: "HGS", logo: "https://logo.clearbit.com/hgs.com" },
        { name: "ICMR", logo: "https://logo.clearbit.com/icmr.gov.in" },
        {
          name: "Immensphere",
          logo: "https://logo.clearbit.com/immensphere.com",
        },
        {
          name: "ImpactGuru",
          logo: "https://logo.clearbit.com/impactguru.com",
        },
        { name: "Indo-MIM", logo: "https://logo.clearbit.com/indomim.com" },
      ],
    },
    sohs: {
      name: "School of Health Sciences",
      icon: Building2,
      recruiters: [
        {
          name: "Apollo Hospitals",
          logo: "https://logo.clearbit.com/apollohospitals.com",
        },
        {
          name: "Fortis Healthcare",
          logo: "https://logo.clearbit.com/fortishealthcare.com",
        },
        {
          name: "Max Healthcare",
          logo: "https://logo.clearbit.com/maxhealthcare.in",
        },
        {
          name: "Manipal Hospitals",
          logo: "https://logo.clearbit.com/manipalhospitals.com",
        },
        {
          name: "Aravind Eye Care",
          logo: "https://logo.clearbit.com/aravind.org",
        },
        {
          name: "Narayana Health",
          logo: "https://logo.clearbit.com/narayanahealth.org",
        },
        { name: "Cipla", logo: "https://logo.clearbit.com/cipla.com" },
        {
          name: "Dr. Reddy's Labs",
          logo: "https://logo.clearbit.com/drreddys.com",
        },
        { name: "Lupin Limited", logo: "https://logo.clearbit.com/lupin.com" },
        { name: "Biocon", logo: "https://logo.clearbit.com/biocon.com" },
      ],
    },
    soadh: {
      name: "School of Arts, Design & Humanities",
      icon: Lightbulb,
      recruiters: [
        {
          name: "Google Creative",
          logo: "https://logo.clearbit.com/google.com",
        },
        { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
        { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
        { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
        {
          name: "Times Internet",
          logo: "https://logo.clearbit.com/timesinternet.com",
        },
        { name: "Ogilvy", logo: "https://logo.clearbit.com/ogilvy.com" },
        { name: "Publicis", logo: "https://logo.clearbit.com/publicis.com" },
        { name: "Wavemaker", logo: "https://logo.clearbit.com/wavemaker.com" },
        { name: "BBDO India", logo: "https://logo.clearbit.com/bbdo.com" },
      ],
    },
    intl: {
      name: "International Placements",
      icon: Globe,
      recruiters: [
        { name: "Google", logo: "https://logo.clearbit.com/google.com" },
        { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
        { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
        { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
        { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
        { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
        {
          name: "Goldman Sachs",
          logo: "https://logo.clearbit.com/goldmansachs.com",
        },
      ],
    },
    mou: {
      name: "MoU Partners",
      icon: Handshake,
      recruiters: [
        { name: "Tata Elxsi", logo: "https://logo.clearbit.com/tataelxsi.com" },
        {
          name: "Quest Global",
          logo: "https://logo.clearbit.com/questglobal.com",
        },
        {
          name: "Mahindra Comviva",
          logo: "https://logo.clearbit.com/comviva.com",
        },
        {
          name: "Continental AG",
          logo: "https://logo.clearbit.com/continental.com",
        },
        {
          name: "J.P. Morgan",
          logo: "https://logo.clearbit.com/jpmorganchase.com",
        },
        {
          name: "Morgan Stanley",
          logo: "https://logo.clearbit.com/morganstanley.com",
        },
      ],
    },
  };

  const statsCards = [
    { label: "500+", description: "Recruiting Partners", icon: Building2 },
    { label: "95%+", description: "Placement Rate", icon: TrendingUp },
    { label: "₹60+ LPA", description: "Highest Package", icon: Award },
    { label: "8+", description: "Sectors", icon: Globe },
  ];

  const outcomeCards = [
    {
      title: "AI-Enabled Curriculum",
      outcome: "→ AI/Data/Core Tech Roles",
      description:
        "NVIDIA-powered academics prepare graduates for premium technical roles at top tech companies",
      icon: Brain,
    },
    {
      title: "Industry Projects",
      outcome: "→ Faster Employability",
      description:
        "Real-world problem solving accelerates job readiness and reduces time-to-productivity",
      icon: Target,
    },
    {
      title: "Research Exposure",
      outcome: "→ Higher-Order Roles",
      description:
        "Published research and innovation experience qualify graduates for leadership and R&D positions",
      icon: Lightbulb,
    },
  ];

  const skillPillars = [
    {
      title: "Industry-Aligned Skills",
      description: "Technical expertise directly mapped to recruiter needs",
      icon: Code,
    },
    {
      title: "AI & Technology Readiness",
      description:
        "NVIDIA-powered education ensuring cutting-edge technical competency",
      icon: Brain,
    },
    {
      title: "Professional & Leadership Development",
      description:
        "Soft skills, communication, and management capabilities for career progression",
      icon: Users,
    },
  ];

  const successStories = [
    {
      name: "Aishwarya K S",
      program: "Computer Science & Engineering",
      role: "Software Engineer",
      company: "Accenture & Infosys",
      achievement:
        "AI-based projects and industry mentoring helped transition into software engineering role",
    },
    {
      name: "Janamruth U",
      program: "Mechanical Engineering",
      role: "Design Engineer",
      company: "Continental AG",
      achievement:
        "Industry-aligned curriculum and placement support secured position in automotive innovation",
    },
    {
      name: "Aashna Bhaskaran",
      program: "Electronics & Communication Engineering",
      role: "Systems Engineer",
      company: "Cognizant & Accenture",
      achievement:
        "Technical training and workshops from 3rd year enabled faster career progression",
    },
  ];

  const placementServices = [
    {
      title: "Campus Placements",
      description:
        "Year-round on-campus recruitment driving placements across all schools",
      icon: Building2,
    },
    {
      title: "Industry-Linked Training",
      description:
        "Technical and soft skills aligned with recruiter expectations",
      icon: Zap,
    },
    {
      title: "Mentorship & Alumni Connect",
      description:
        "Career guidance and networking with successful alumni across industries",
      icon: Handshake,
    },
  ];

  const contactInfo = [
    {
      category: "Fresher's Hiring",
      contacts: [
        {
          name: "M N Guruvenkatesh",
          title: "Senior Vice President - Placements & Skill Development",
          phone: "+91 98441 65956",
          email: "gm-cr@dayanandasagar.edu",
        },
        {
          name: "Vijay Kumar S",
          title: "Director - Training & Corporate Relations",
          phone: "+91 98863 94532",
          email: "placements@dsu.edu.in",
        },
      ],
    },
    {
      category: "MBA Hiring",
      contacts: [
        {
          name: "Prof. Sanjay K",
          title:
            "Director (Corporate Relations & Placement) Management Schools",
          phone: "+91 98802 83123",
          email: "sanjay.k@dsu.edu.in",
        },
        {
          name: "Prof. Darpana Singh",
          title: "Manager - Placement",
          phone: "+91 98451 08664",
          email: "darpana@dsu.edu.in",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-10 lg:py-20 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-slate-900 dark:via-orange-900 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/20 dark:bg-orange-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute top-1/3 right-0 w-80 h-80 bg-brand-magenta/15 dark:bg-red-600/15 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/3 w-72 h-72 bg-brand-blue/10 dark:bg-orange-400/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="absolute top-10 right-20 w-40 h-40 border-2 border-brand-blue/20 dark:border-orange-500/20 rounded-3xl transform rotate-45 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-32 h-32 border-2 border-brand-magenta/20 dark:border-red-500/20 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <div className="inline-flex items-center px-3 py-3 bg-gradient-to-r from-brand-blue/10 to-brand-magenta/10 dark:from-orange-500/20 dark:to-red-600/20 backdrop-blur-sm rounded-full border border-brand-blue/20 dark:border-orange-500/40 mb-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <TrendingUp className="w-5 h-5 text-brand-blue dark:text-orange-400 mr-2" />
            <span className="text-sm font-semibold text-brand-blue dark:text-orange-300">
              Career Outcomes Powered by AI-First Education
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
            <span className="bg-brand-gradient bg-clip-text text-transparent inline-block px-2">
              DSU Graduates
            </span>
            <br />
            <span className="bg-brand-gradient bg-clip-text text-transparent inline-block px-2">
              Securing Premium Roles
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            DSU graduates secure career-defining roles across technology,
            engineering, management, finance, and research through AI-integrated
            education, industry mentorship, and research excellence.
          </p>
        </div>
      </section>

      {/* ===== PLACEMENT OUTCOMES SNAPSHOT (4 STAT CARDS) ===== */}
      <section ref={statsRef} className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 transform ${
                    statsVisible
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="text-4xl font-bold text-brand-blue mb-2">
                      {stat.label}
                    </div>
                    <CardTitle className="text-foreground text-sm font-semibold">
                      {stat.description}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RECRUITERS BY SCHOOL ===== */}
      <section ref={recruitersRef} className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Top Recruiting Partners
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Global leaders actively recruiting DSU graduates
            </p>
          </div>

          <div className="space-y-4">
            {Object.entries(recruitersBySchool).map(([key, school]) => {
              const SchoolIcon = school.icon;
              return (
                <div
                  key={key}
                  className="border border-border/50 rounded-2xl overflow-hidden bg-card/30"
                >
                  <button
                    onClick={() => toggleSector(key)}
                    className="w-full px-4 py-6 flex items-center justify-between hover:bg-orange-500/5 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <SchoolIcon className="w-5 h-5 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                        {school.name}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                        expandedSector[key] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedSector[key] && (
                    <div className="border-t border-border/30 px-4 py-8 bg-gradient-to-b from-orange-500/5 to-transparent">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {school.recruiters.map((recruiter, recruiterIdx) => (
                          <div
                            key={recruiterIdx}
                            className="border-2 border-slate-400 dark:border-slate-600 rounded-lg p-4 flex items-center justify-center min-h-32 hover:border-orange-500 hover:shadow-md transition-all duration-300 bg-white dark:bg-card/50"
                          >
                            <img
                              src={recruiter.logo}
                              alt={recruiter.name}
                              className="max-w-full max-h-24 object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                const next = e.currentTarget.nextElementSibling;
                                if (next) {
                                  next.classList.remove("hidden");
                                  next.classList.add("block");
                                }
                              }}
                            />
                            <span className="hidden text-center font-semibold text-foreground text-sm px-2">
                              {recruiter.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== OUTCOME-DRIVEN ADVANTAGES ===== */}
      <section
        ref={outcomesRef}
        className="px-3 py-10 lg:py-16 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Why DSU Graduates Excel
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Direct connection between academic excellence and career outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {outcomeCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 transform ${
                    outcomesVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground text-lg">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm font-semibold text-orange-500 mt-2">
                      {card.outcome}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THREE SKILL PILLARS ===== */}
      <section ref={pillarsRef} className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Three Pillars of Career Readiness
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {skillPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 group ${
                    pillarsVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground group-hover:text-orange-500 transition-colors">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== OUTCOME-FOCUSED SUCCESS STORIES ===== */}
      <section
        ref={storiesRef}
        className="px-3 py-10 lg:py-16 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Graduate Success Stories
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Real outcomes from real graduates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 transform ${
                  storiesVisible
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {story.name}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    {story.program}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 rounded-full w-fit">
                    <Briefcase className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-orange-500">
                      {story.role}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground mb-3">
                    {story.company}
                  </p>
                  <p className="text-sm text-foreground italic border-l-2 border-orange-500 pl-3">
                    "{story.achievement}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THREE PLACEMENT SERVICES ===== */}
      <section className="px-3 py-10 lg:py-16 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Placement Support
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {placementServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BATCH-WISE PLACEMENT DATA (DASHBOARD STYLE) ===== */}
      <section className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Placement Data by School
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive year-wise placement statistics
            </p>
          </div>

          <div className="space-y-4">
            {placementData.map((school) => (
              <div
                key={school.key}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleSchool(school.key)}
                  className="w-full px-4 py-6 flex items-center justify-between hover:bg-orange-500/5 transition-colors"
                >
                  <div className="flex items-start gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {school.name}
                      </h3>
                      <p className="text-sm text-foreground">
                        {school.programs}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                      expandedSchools[school.key] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSchools[school.key] && (
                  <div className="border-t border-border/30 px-4 py-6 bg-gradient-to-b from-orange-500/5 to-transparent">
                    {school.subCategories ? (
                      <div className="space-y-6">
                        {school.subCategories.map((subCategory, subIdx) => (
                          <div key={subIdx}>
                            <h4 className="text-base font-semibold text-foreground mb-4">
                              {subCategory.name}
                            </h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                              {subCategory.batches.map((batch, batchIdx) => (
                                <a
                                  key={batchIdx}
                                  href={batch.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border/30 rounded-xl hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 group"
                                >
                                  <FileText className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-orange-500 transition-colors">
                                    {batch.year} Batch
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {school.batches.map((batch, batchIdx) => (
                          <a
                            key={batchIdx}
                            href={batch.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border/30 rounded-xl hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 group"
                          >
                            <FileText className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground group-hover:text-orange-500 transition-colors">
                              {batch.year} Batch
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION (COMPACT) ===== */}
      <section className="px-3 py-10 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Reach our placement team for recruitment and partnership
              opportunities
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  {section.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {section.contacts.map((contact, contactIdx) => (
                    <div
                      key={contactIdx}
                      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {contact.name}
                      </h4>
                      <p className="text-xs text-foreground mb-3">
                        {contact.title}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-xs text-foreground hover:text-orange-500 transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-xs text-foreground hover:text-orange-500 transition-colors break-all"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-3 py-10 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Begin Your Success Story
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Join DSU and access opportunities with 500+ global recruiters
              committed to your career growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/academics">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500/30 hover:bg-orange-500/10 px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

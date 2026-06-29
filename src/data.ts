import { 
  Rocket, 
  Target, 
  Zap, 
  Globe2, 
  TrendingUp, 
  Award, 
  Briefcase, 
  Map, 
  ShieldCheck, 
  MessageSquare,
  Server,
  Layers,
  Cpu,
  Users
} from 'lucide-react';

export const slides = [
  {
    id: "title",
    layout: "center",
    content: {
      tagline: "Empowering the Next Generation of Digital Experiences",
      title: "Nexus Platform",
      subtitle: "Reimagining Web Architecture for Enterprise Scale",
      author: "Alfin Atria",
      role: "Founder & CEO"
    }
  },
  {
    id: "executive-summary",
    layout: "split",
    icon: Rocket,
    title: "Executive Summary",
    content: {
      text: "Nexus Platform hadir untuk merombak cara perusahaan membangun, mengelola, dan menskalakan ekosistem digital mereka. Kami membawa efisiensi ke tingkat selanjutnya.",
      points: [
        {
          title: "Skalabilitas Tanpa Batas",
          description: "Arsitektur cloud-native yang tumbuh seiring dengan bisnis Anda tanpa hambatan performa."
        },
        {
          title: "Integrasi AI Cerdas",
          description: "Otomatisasi alur kerja dan personalisasi data didorong oleh AI engine eksklusif."
        },
        {
          title: "Efisiensi Biaya Operasional",
          description: "Menurunkan biaya infrastruktur hingga 40% melalui orkestrasi resource yang optimal."
        }
      ]
    }
  },
  {
    id: "problem",
    layout: "cards",
    icon: Target,
    title: "The Problem",
    subtitle: "Tantangan Kritis di Era Digital Saat Ini",
    content: {
      cards: [
        {
          icon: Layers,
          title: "Fragmentasi Sistem",
          description: "Data dan proses yang terpecah di berbagai platform menyebabkan inefisiensi dan silo informasi."
        },
        {
          icon: Zap,
          title: "Biaya Maintenance Tinggi",
          description: "Arsitektur legacy memaksa perusahaan mengeluarkan 70% budget IT hanya untuk operasional harian."
        },
        {
          icon: Users,
          title: "UX yang Buruk",
          description: "Performa lambat dan antarmuka yang kompleks secara langsung menurunkan tingkat konversi dan retensi pengguna."
        }
      ]
    }
  },
  {
    id: "solution",
    layout: "feature",
    icon: Cpu,
    title: "The Solution: Nexus Platform",
    subtitle: "Satu ekosistem terpadu untuk semua kebutuhan digital Anda.",
    content: {
      features: [
        {
          title: "Ekosistem Terpusat (Single Source of Truth)",
          description: "Menggabungkan manajemen data, analitik, dan deployment dalam satu dashboard intuitif."
        },
        {
          title: "Otomatisasi Alur Kerja",
          description: "Mengurangi pekerjaan repetitif dengan automasi berbasis aturan dan machine learning."
        },
        {
          title: "Desain Berpusat pada Pengguna (UCD)",
          description: "Antarmuka yang responsif, adaptif, dan dirancang khusus untuk metrik keterlibatan tertinggi."
        }
      ]
    }
  },
  {
    id: "market",
    layout: "stats",
    icon: Globe2,
    title: "Market Opportunity",
    subtitle: "Pasar yang besar, berkembang, dan siap untuk disrupsi.",
    content: {
      stats: [
        { value: "$50B+", label: "Total Addressable Market (TAM)", suffix: "pada 2025" },
        { value: "25%", label: "Proyeksi Pertumbuhan (CAGR)", suffix: "Y-o-Y" },
        { value: "8/10", label: "Enterprise B2B", suffix: "Mencari solusi terpadu" }
      ],
      text: "Fokus awal kami adalah pada sektor B2B SaaS dan Enterprise mid-market di Asia Tenggara, sebelum ekspansi global."
    }
  },
  {
    id: "founder",
    layout: "profile",
    icon: Award,
    title: "Founder's Profile",
    content: {
      name: "Alfin Atria",
      role: "Founder & Chief Architect",
      quote: "\"Visi saya adalah menyederhanakan kompleksitas teknologi menjadi pengalaman pengguna yang mulus dan luar biasa.\"",
      bio: "Lebih dari 10 tahun pengalaman membangun produk digital yang skalabel. Diakui sebagai otoritas dalam arsitektur web modern dan desain sistem berkinerja tinggi.",
      highlights: [
        "Mantan Lead Engineer di Top Tech Unicorn",
        "Membangun sistem dengan 10M+ Monthly Active Users",
        "Pembicara reguler di konferensi teknologi (Web Arch & AI)"
      ]
    }
  },
  {
    id: "business-model",
    layout: "cards",
    icon: Briefcase,
    title: "Business Model",
    subtitle: "Strategi Monetisasi yang Terukur dan Berkelanjutan",
    content: {
      cards: [
        {
          icon: Layers,
          title: "Freemium Tier",
          description: "Akses dasar gratis untuk menarik pengguna awal dan developer independen (Product-led Growth)."
        },
        {
          icon: Server,
          title: "Enterprise Licensing",
          description: "Biaya berlangganan tahunan untuk perusahaan dengan kebutuhan SLA, keamanan khusus, dan dukungan 24/7."
        },
        {
          icon: Zap,
          title: "Pay-as-you-go API",
          description: "Monetisasi berbasis penggunaan untuk akses infrastruktur AI dan analitik tingkat lanjut."
        }
      ]
    }
  },
  {
    id: "roadmap",
    layout: "timeline",
    icon: Map,
    title: "Product Roadmap",
    content: {
      timeline: [
        {
          phase: "Fase 1 (Q3 2026)",
          title: "MVP & Closed Beta",
          description: "Peluncuran arsitektur inti, onboarding 50 enterprise pilot, validasi metrik performa."
        },
        {
          phase: "Fase 2 (Q4 2026)",
          title: "Public Launch & AI Features",
          description: "Rilis publik secara komersial, integrasi kapabilitas Generative AI, kampanye pemasaran agresif."
        },
        {
          phase: "Fase 3 (Q1 2027)",
          title: "Ekspansi Ekosistem & Global",
          description: "Membuka API untuk pihak ketiga, meluncurkan marketplace plugin, ekspansi ke pasar internasional."
        }
      ]
    }
  },
  {
    id: "advantage",
    layout: "feature",
    icon: ShieldCheck,
    title: "Competitive Advantage",
    subtitle: "Mengapa Nexus Platform Berbeda",
    content: {
      features: [
        {
          title: "Proprietary AI Engine",
          description: "Tidak sekadar 'wrapper' API luar, Nexus memiliki mesin ML mandiri untuk analitik prediktif."
        },
        {
          title: "10x Faster Deployment",
          description: "Lingkungan development ke produksi yang terhubung mulus menghemat waktu go-to-market secara drastis."
        },
        {
          title: "Enterprise-Grade Security by Default",
          description: "Kepatuhan terhadap standar keamanan global (SOC2, GDPR) dibangun langsung di layer terbawah arsitektur."
        }
      ]
    }
  },
  {
    id: "cta",
    layout: "center",
    icon: MessageSquare,
    title: "Mari Bangun Masa Depan Bersama",
    content: {
      text: "Kami membuka putaran pendanaan Seed untuk mempercepat penetrasi pasar dan pengembangan produk.",
      actionText: "Hubungi via Instagram",
      contact: "@alvinatria",
      link: "https://www.instagram.com/alvinatria?igsh=YW95bHRtanVnZTRz"
    }
  }
];

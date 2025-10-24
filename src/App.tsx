import React, { useState, useEffect } from "react"; // Hapus Fragment
import {
  Briefcase,
  BookOpen,
  GraduationCap,
  Brain,
  Database,
  Code,
  LineChart,
  Layers,
  X,
  ArrowUp,
  Target,
  // Ganti panah zigzag dengan panah ke bawah
  ArrowDownCircle,
  // Impor ikon tambahan untuk latar belakang
  Cloud,
  Cpu,
  Feather,
  GitCommit,
  Leaf,
  Lightbulb,
  MessageCircle,
  Zap,
  // Ikon untuk section baru
  UserCheck,
  Flag,
  ListChecks, // Mengganti ListSteps
} from "lucide-react";

type RoadmapStep = {
  month: string;
  title: string;
  icon: React.ReactElement;
  desc: string;
};

// --- Tipe data baru untuk modal strategi ---
type StrategyItem = {
  title: string;
  content: React.ReactElement;
  icon: React.ReactElement;
  color: "blue" | "orange";
};

// ROADMAP KARIR (BERTINGKAT & LINGKUP JABATAN)
const roadmap: RoadmapStep[] = [
  {
    month: "Agustus 2025",
    title: "Magang Data Analyst",
    icon: <Briefcase className="w-8 h-8 text-[#0076D6]" />,
    desc: "Memulai pengalaman profesional dengan menganalisis data operasional Telkom, membuat laporan insight, dan mendukung tim dalam proyek internal.",
  },
  {
    month: "September 2025",
    title: "Asisten Peneliti & Penyusun Tugas Akhir",
    icon: <BookOpen className="w-8 h-8 text-[#F6A623]" />,
    desc: "Membantu riset AI/Data Science, menyiapkan dataset, merancang metodologi eksperimen, dan memulai pengembangan model AI untuk tugas akhir.",
  },
  {
    month: "Oktober–Desember 2025",
    title: "Junior AI/ML Engineer",
    icon: <Brain className="w-8 h-8 text-[#0076D6]" />,
    desc: "Melakukan eksperimen model Machine Learning/Deep Learning, analisis performa, dan mulai membangun portofolio proyek AI/Data pribadi.",
  },
  {
    month: "Januari 2026",
    title: "Data Analyst Profesional",
    icon: <GraduationCap className="w-8 h-8 text-[#F6A623]" />,
    desc: "Bekerja sebagai Data Analyst penuh waktu, memproses data operasional, membuat dashboard, dan memberikan insight bisnis berbasis data.",
  },
  {
    month: "Februari–Mei 2026",
    title: "AI Engineer & Portfolio Development",
    icon: <Database className="w-8 h-8 text-[#0076D6]" />,
    desc: "Mengembangkan skill AI/ML profesional, membangun portofolio proyek, serta melakukan deployment model AI sederhana untuk studi kasus internal dan personal.",
  },
  {
    month: "Juni–Juli 2026",
    title: "Freelance Data & AI Consultant",
    icon: <LineChart className="w-8 h-8 text-[#F6A623]" />,
    desc: "Memberikan layanan analisis data, predictive modeling, dan implementasi solusi AI untuk klien dan proyek open-source, sambil mengasah pengalaman konsultasi.",
  },
  {
    month: "Agustus–Desember 2026",
    title: "Junior AI Engineer / Peneliti Independen",
    icon: <Cpu className="w-8 h-8 text-[#0076D6]" />,
    desc: "Bekerja sebagai Junior AI Engineer, mengembangkan model AI untuk produksi, serta melakukan riset independen dalam NLP, Computer Vision, dan model multimodal.",
  },
];

const futurePlans = [
  {
    year: "2027–2028",
    plan: "Menjadi Auditor Data / Senior Data Analyst, memimpin audit kualitas data dan integritas sistem, serta memimpin proyek AI/Data skala menengah.",
  },
  {
    year: "2029–2030",
    plan: "Menjadi Manager Bidang Analisis / AI / Data, memimpin tim, mengelola proyek strategis, dan memastikan implementasi solusi berbasis data yang efektif dan efisien.",
  },
  {
    year: "2030+",
    plan: "Mendirikan startup riset AI berbasis Computational Science untuk mengembangkan solusi inovatif di bidang energi, lingkungan, pendidikan, dan budaya.",
  },
];

const interests = [
  "Mathematics & Statistics",
  "Competitive Programming",
  "Machine Learning & Deep Learning",
  "Artificial Intelligence (AI)",
  "Data Science & Analytics",
  "Computer Vision & Predictive Modeling",
];

// --- Data untuk Section Unik (dengan konten modal) ---
const strategyData: StrategyItem[] = [
  {
    title: "Posisi Saat Ini & Kekuatan",
    icon: <UserCheck className="w-12 h-12 text-[#0076D6] mb-4" />,
    color: "blue",
    content: (
      <p className="text-gray-700 text-lg leading-relaxed">
        Saya bekerja sebagai Data Analyst di Telkom Indonesia (Digistar, Witel
        Kalbar), berfokus pada analisis data dan insight bisnis. Selain itu, saya
        memiliki minat kuat di AI, Machine Learning, Deep Learning, dan Data
        Science, yang terus saya kembangkan melalui proyek pribadi dan riset.
        Saya terbiasa mengubah data menjadi solusi prediktif dan keputusan
        berbasis insight menggunakan Python, SQL, dan framework ML/DL modern.
      </p>
    ),
  },
  {
    title: "Arah Karier (3–5 Tahun)",
    icon: <Flag className="w-12 h-12 text-[#F6A623] mb-4" />,
    color: "orange",
    content: (
      <p className="text-gray-700 text-lg leading-relaxed">
        Saya bercita-cita menjadi Data Scientist / Machine Learning Engineer / AI
        Researcher, memimpin proyek AI/Data dengan dampak nyata, berkontribusi
        pada riset, dan menguasai MLOps, cloud deployment, dan sistem AI skala
        besar.
      </p>
    ),
  },
  {
    title: "Langkah Strategis",
    icon: <ListChecks className="w-12 h-12 text-[#0076D6] mb-4" />,
    color: "blue",
    content: (
      <>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          Jangka Pendek:
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 mb-4">
          <li>Menyelesaikan proyek internal Telkom dan proyek AI pribadi</li>
          <li>Membangun portofolio profesional (GitHub & website)</li>
          <li>Mengasah skill ML/DL dan interpretabilitas model</li>
        </ul>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          Jangka Menengah:
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
          <li>Mendapatkan posisi Data Scientist / ML Engineer penuh waktu</li>
          <li>Menguasai pipeline data skala besar dan deployment cloud</li>
          <li>
            Mendapatkan sertifikasi profesional dan berkontribusi pada
            riset/publikasi
          </li>
        </ul>
      </>
    ),
  },
];

// Array ikon untuk latar belakang abstrak
const backgroundIcons = [
  <Briefcase />,
  <BookOpen />,
  <GraduationCap />,
  <Brain />,
  <Database />,
  <Code />,
  <LineChart />,
  <Layers />,
  <Target />,
  <Cloud />,
  <Cpu />,
  <Feather />,
  <GitCommit />,
  <Leaf />,
  <Lightbulb />,
  <MessageCircle />,
  <Zap />,
];

export default function App() {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(null);
  // --- State baru untuk modal strategi ---
  const [selectedStrategy, setSelectedStrategy] =
    useState<StrategyItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    document.title = "Roadmap Career";

    const style = document.createElement("style");
    style.innerHTML = `
      .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        will-change: opacity, transform;
      }
      .fade-in-section.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      @keyframes modal-pop-in {
        from {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
      .modal-pop {
        animation: modal-pop-in 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
      }
      
      @keyframes modal-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .modal-fade {
        animation: modal-fade-in 0.2s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      document.head.removeChild(style);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    // --- PERUBAHAN: Latar belakang gradien halus ---
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans antialiased">
      {/* Header (Warna solid Biru) */}
      <header className="relative h-auto md:h-48 w-full text-white shadow-xl py-12 md:py-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0076D6]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-4">
            <span>Roadmap Career</span>
            <Target className="w-10 h-10 opacity-90" />
          </h1>
          <div className="mt-4 text-white opacity-90 text-md space-y-1">
            <p>Kelompok: Soft Skill 14</p>
            <p>Nama: Muhammad Dzaky Ramdani Syakur</p>
          </div>
        </div>
      </header>

      {/* Roadmap Section */}
      <section className="pt-10 pb-20 px-6 md:px-12 relative overflow-hidden">
        {/* Latar Belakang Ikon Abstrak */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          {Array.from({ length: 25 }).map((_, idx) => {
            const Icon =
              backgroundIcons[
                Math.floor(Math.random() * backgroundIcons.length)
              ];
            const size = Math.random() * (100 - 40) + 40;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const rotate = Math.random() * 360;
            const color = idx % 2 === 0 ? "#0076D6" : "#F6A623";

            return (
              <div
                key={idx}
                className="absolute"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  color: color,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              >
                {React.cloneElement(Icon, {
                  className: "w-full h-full",
                })}
              </div>
            );
          })}
        </div>

        {/* --- Layout kembali ke 1 kolom --- */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {roadmap.map((step, i) => {
            const isEven = i % 2 === 0;
            const textColor = isEven ? "text-[#0076D6]" : "text-[#F6A623]";
            const borderColor = isEven
              ? "border-[#0076D6]"
              : "border-[#F6A623]";

            let itemWrapperClass =
              "relative mb-8 fade-in-section w-full md:max-w-2xl mx-auto";

            return (
              <div key={i} className={itemWrapperClass}>
                <div
                  className={`relative bg-white p-6 rounded-2xl border-2 border-dashed ${borderColor} transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer overflow-hidden`}
                  onClick={() => setSelectedStep(step)}
                >
                  {React.cloneElement(step.icon, {
                    className: `w-24 h-24 ${textColor} absolute -top-4 -right-4 opacity-10 pointer-events-none rotate-12`,
                  } as { className: string })}

                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-gray-800">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mt-2 leading-relaxed line-clamp-2">
                      {step.desc}
                    </p>
                    <span
                      className={`text-sm font-medium text-[#0076D6] mt-3 inline-block`}
                    >
                      Lihat Detail &rarr;
                    </span>
                  </div>
                </div>

                {/* --- Kembalikan panah ke bawah --- */}
                {i < roadmap.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <ArrowDownCircle
                      className={`w-10 h-10 ${
                        (i + 1) % 2 === 0 // Warna panah mengikuti kartu BERIKUTNYA
                          ? "text-[#0076D6]"
                          : "text-[#F6A623]"
                      } opacity-60 transition-opacity duration-300 group-hover:opacity-80 animate-bounce`} // Tambah animasi bounce
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Future Plans (Latar belakang abu-abu) */}
      <section className="py-20 px-6 md:px-12 bg-gray-100"> {/* Ganti bg */}
        <h2 className="text-4xl font-bold text-center text-[#0076D6] mb-16">
          Future Planning
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {futurePlans.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out fade-in-section"
            >
              <h3 className="text-3xl font-bold text-[#F6A623] mb-3">
                {item.year}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.plan}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION UNIK (INTERAKTIF) --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategyData.map((item, i) => {
            // --- PERUBAHAN: Tambahkan border outline ---
            const borderColor = item.color === "blue" ? "border-[#0076D6]" : "border-[#F6A623]";
            return (
              <div
                key={i}
                onClick={() => setSelectedStrategy(item)}
                className={`flex flex-col items-center text-center p-6 bg-white rounded-2xl border-2 border-dashed ${borderColor} shadow-lg fade-in-section cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105`} // Ubah bg dan tambah border
              >
                {item.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.title === "Langkah Strategis"
                    ? "Jangka Pendek & Jangka Menengah..."
                    : "Klik untuk melihat detail..."}
                </p>
                <span
                  className={`text-sm font-medium text-[#0076D6] mt-auto inline-block`}
                >
                  Lihat Detail &rarr;
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interests (Latar belakang putih) */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#0076D6] mb-16">
          Minat & Keahlian
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {interests.map((interest, i) => (
            <div
              key={i}
              // --- PERUBAHAN: Animasi hover scale ---
              className="bg-white border-2 border-blue-200 text-[#0076D6] font-medium px-5 py-3 rounded-full shadow-sm hover:bg-blue-50 transition-all cursor-default fade-in-section transform hover:scale-105 duration-200"
            >
              {interest}
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer (BG gray-900, aksen oranye) --- */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-sm text-center">
            © {new Date().getFullYear()}
            <span className="text-[#F6A623] font-semibold"> Dzaky</span>
          </p>
        </div>
      </footer>

      {/* === Modal Roadmap === */}
      {selectedStep && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-40 modal-fade"
            onClick={() => setSelectedStep(null)}
          ></div>

          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-2xl bg-white rounded-2xl border-2 border-dashed ${
              roadmap.findIndex((r) => r.title === selectedStep.title) % 2 ===
              0
                ? "border-[#0076D6]"
                : "border-[#F6A623]"
            } shadow-2xl p-8 transform modal-pop`}
          >
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div>
              {/* --- PERUBAHAN DIMULAI --- */}
              {/* Tanggal/Bulan dihapus sesuai permintaan */}
              {/*
              <h3
                className={`text-lg font-semibold ${
                  roadmap.findIndex((r) => r.title === selectedStep.title) %
                    2 ===
                  0
                    ? "text-[#0076D6]"
                    : "text-[#F6A623]"
                } uppercase tracking-wider`}
              >
                {selectedStep.month}
              </h3>
              */}

              {/* mt-2 dihapus dari h2 agar rapat ke atas */}
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedStep.title}
              </h2>
              {/* --- PERUBAHAN SELESAI --- */}

              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedStep.desc}
              </p>
            </div>
          </div>
        </>
      )}

      {/* === Modal Strategi === */}
      {selectedStrategy && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-40 modal-fade"
            onClick={() => setSelectedStrategy(null)}
          ></div>

          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-2xl bg-white rounded-2xl border-2 border-dashed ${
              selectedStrategy.color === "blue"
                ? "border-[#0076D6]"
                : "border-[#F6A623]"
            } shadow-2xl p-8 transform modal-pop`}
          >
            <button
              onClick={() => setSelectedStrategy(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedStrategy.title}
              </h2>
              {/* Render konten JSX */}
              {selectedStrategy.content}
            </div>
          </div>
        </>
      )}
      {/* === Akhir Modal === */}

      {/* === Tombol Kembali ke Atas (Warna Biru) === */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#0076D6] text-white rounded-full shadow-lg hover:bg-[#005faa] transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
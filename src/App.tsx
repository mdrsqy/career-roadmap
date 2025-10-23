import React, { useState, useEffect } from "react";
// ... (imports utuh)
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
  // ... (definisi tipe utuh)
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

// PERBAIKAN: Terapkan tipe data dan sesuaikan warna ikon
const roadmap: RoadmapStep[] = [
  // ... (data roadmap utuh)
  {
    month: "Agustus 2025",
    title: "Mulai Magang di Digistar Telkom Witel Kalbar (Regional IV)",
    icon: <Briefcase className="w-8 h-8 text-[#0076D6]" />,
    desc: "Aku memulai perjalanan profesional dengan magang di program Digistar Telkom. Fokusku adalah mengerjakan proyek analisis data internal dan riset kecil penerapan machine learning untuk efisiensi operasional Telkom.",
  },
  {
    month: "September 2025",
    title: "Mulai Semester Akhir & Menyusun Topik Tugas Akhir",
    icon: <BookOpen className="w-8 h-8 text-[#F6A623]" />,
    desc: "Aku mulai menyusun proposal Tugas Akhir dengan topik OCR Aksara Tradisional Indonesia. Pada tahap ini aku merancang dataset, struktur eksperimen, dan pendekatan model deep learning yang akan digunakan.",
  },
  {
    month: "Oktober 2025",
    title: "Eksperimen Awal Deep Learning",
    icon: <Brain className="w-8 h-8 text-[#0076D6]" />,
    desc: "Aku melakukan eksperimen awal menggunakan model CNN ringan untuk mengenali karakter aksara. Di tahap ini aku mulai memahami arsitektur, parameter, dan tantangan akurasi antar-aksara.",
  },
  {
    month: "November 2025",
    title: "Fine-Tuning & Ensemble Modeling",
    icon: <Layers className="w-8 h-8 text-[#F6A623]" />,
    desc: "Aku melakukan fine-tuning terhadap model seperti ResNet dan MobileNet, serta menggabungkannya dengan teknik ensemble voting untuk hasil klasifikasi yang lebih akurat dan stabil.",
  },
  {
    month: "Desember 2025",
    title: "Analisis Akhir & Penulisan Skripsi",
    icon: <Code className="w-8 h-8 text-[#0076D6]" />,
    desc: "Aku menganalisis performa model, membuat visualisasi hasil, dan menulis Bab IV–V skripsi. Pada tahap ini aku juga mulai menyiapkan presentasi untuk sidang akhir.",
  },
  {
    month: "Januari 2026",
    title: "Sidang Tugas Akhir & Wisuda",
    icon: <GraduationCap className="w-8 h-8 text-[#F6A623]" />,
    desc: "Aku menjalani sidang Tugas Akhir di Universitas Telkom dan resmi lulus. Proyek OCR aksara tradisionalku menjadi karya yang membanggakan dan menjadi dasar portofolio AI-ku.",
  },
  {
    month: "Februari 2026",
    title: "Publikasi & Presentasi Penelitian",
    icon: <Brain className="w-8 h-8 text-[#0076D6]" />,
    desc: "Aku menulis paper ilmiah berdasarkan hasil skripsi dan mengajukannya ke konferensi nasional bidang kecerdasan buatan untuk dipublikasikan.",
  },
  {
    month: "Maret 2026",
    title: "Menjadi Asisten Riset & Kontributor Open Source",
    icon: <Brain className="w-8 h-8 text-[#F6A623]" />,
    desc: "Aku mulai berkontribusi dalam proyek riset terbuka di GitHub dan membantu penelitian AI lokal, sambil memperdalam pemahaman tentang NLP dan computer vision.",
  },
  {
    month: "April 2026",
    title: "Membangun Portfolio Data & AI",
    icon: <Database className="w-8 h-8 text-[#0076D6]" />,
    desc: "Aku membangun portofolio profesional yang berisi proyek analisis data, deep learning, dan AI deployment berbasis Python dan TensorFlow.",
  },
  {
    month: "Mei 2026",
    title: "Belajar MLOps & Cloud Computing",
    icon: <LineChart className="w-8 h-8 text-[#F6A623]" />,
    desc: "Aku memperdalam penerapan model AI di lingkungan produksi menggunakan Docker, FastAPI, dan Google Cloud AI agar model bisa berjalan secara real-time.",
  },
  {
    month: "Juni 2026",
    title: "Mengikuti Kompetisi AI & Data Science",
    icon: <Brain className="w-8 h-8 text-[#0076D6]" />,
    desc: "Aku berpartisipasi dalam kompetisi seperti Kaggle dan DrivenData untuk mengasah kemampuan analitik dan problem solving berbasis data dunia nyata.",
  },
  {
    month: "Juli 2026",
    title: "Mulai Freelance sebagai Data Analyst & AI Engineer",
    icon: <Briefcase className="w-8 h-8 text-[#F6A623]" />,
    desc: "Aku mulai menerima proyek freelance di bidang analitik, prediksi, dan pembuatan model AI untuk membantu bisnis dan penelitian akademik.",
  },
  {
    month: "Agustus–Desember 2026",
    title: "Menjadi Junior AI Engineer & Peneliti Independen",
    icon: <Cpu className="w-8 h-8 text-[#0076D6]" />,
    desc: "Aku meniti karier profesional sebagai Junior AI Engineer sambil melanjutkan riset independen tentang OCR, NLP, dan model multimodal.",
  },
];

const futurePlans = [
  // ... (data futurePlans utuh)
  {
    year: "2027–2030",
    plan: "Menjadi AI Research Engineer yang fokus pada Computer Vision, NLP, dan sistem berbasis data. Aku ingin terus riset dan publikasi di bidang AI yang berdampak luas.",
  },
  {
    year: "2030+",
    plan: "Mendirikan startup riset AI berbasis computational science untuk mengembangkan solusi di bidang energi, lingkungan, pendidikan, dan budaya.",
  },
];

const interests = [
  // ... (data interests utuh)
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
  // ... (ikon utuh)
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
    // ... (useEffect untuk style dan observer utuh)
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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* Header (Warna solid Biru) */}
      <header className="relative h-auto md:h-48 w-full text-white shadow-xl py-12 md:py-0 flex items-center justify-center">
        {/* ... (isi header utuh) */}
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
      <section className="py-20 px-6 md:px-12 bg-gray-50 relative overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto pt-10">
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

                {i < roadmap.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <ArrowDownCircle
                      className={`w-10 h-10 ${textColor} opacity-60`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Future Plans (Latar belakang abu-abu) */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        {/* ... (isi future plans utuh) */}
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
          {strategyData.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedStrategy(item)}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-lg fade-in-section cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {/* Tampilkan cuplikan singkat */}
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
          ))}
        </div>
      </section>

      {/* Interests (Latar belakang putih) */}
      <section className="py-20 px-6 md:px-12 bg-white">
        {/* ... (isi interests utuh) */}
        <h2 className="text-4xl font-bold text-center text-[#0076D6] mb-16">
          Minat & Keahlian
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {interests.map((interest, i) => (
            <div
              key={i}
              className="bg-white border-2 border-blue-200 text-[#0076D6] font-medium px-5 py-3 rounded-full shadow-sm hover:bg-blue-50 transition-all cursor-default fade-in-section"
            >
              {interest}
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer (BG gray-900, aksen oranye) --- */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        {/* ... (isi footer utuh) */}
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
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
                {selectedStep.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedStep.desc}
              </p>
            </div>
          </div>
        </>
      )}

      {/* === Modal Strategi (BARU) === */}
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
          // ... (isi tombol utuh)
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

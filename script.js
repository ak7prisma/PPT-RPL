
const slides = [

    {
        layout: "hero",
        title: "SKPL / SRS",
        subtitle: "Spesifikasi Kebutuhan Perangkat Lunak",
        desc: "Software Requirements Specification",
        tag: "Materi Rekayasa Perangkat Lunak"
    },
    {
        layout: "team",
        title: "Meet The Team",
        members: [
            { name: "Ahmad Kurnia Prisma", role: "Pemateri", desc: "", img: "prisma.png" },
            { name: "Raihan Agasi", role: "MC", desc: "", img: "rehan.png" },
            { name: "Muhammad Faiz", role: "Pemateri", desc: "", img: "faiz.png" }
        ]
    },
    

    {
        layout: "section",
        number: "01",
        title: "Pengenalan SKPL",
        desc: "Apa itu SKPL dan mengapa sangat krusial dalam proyek IT?"
    },
    {
        layout: "content-split",
        title: "Definisi Dasar",
        subtitle: "Apa itu SKPL/SRS?",
        content: `
            <p class="mb-4">SKPL adalah dokumen formal yang berfungsi sebagai <strong>"Cetak Biru" (Blueprint)</strong> pengembangan software.</p>
            <p>Dokumen ini menjelaskan secara rinci:</p>
            <ul class="list-disc list-inside mt-2 text-slate-400 space-y-1">
                <li>Apa yang harus dilakukan sistem?</li>
                <li>Bagaimana performa sistem?</li>
                <li>Batasan apa yang berlaku?</li>
            </ul>
        `,
        icon: "📝"
    },
    {
        layout: "content-center",
        title: "Analogi Sederhana",
        content: `
            <div class="bg-blue-900/30 border border-blue-500/30 p-8 rounded-2xl text-center">
                <h3 class="text-2xl font-bold text-white mb-4">🏠 Membangun Rumah</h3>
                <p class="text-lg leading-relaxed text-slate-300">
                    Sebelum tukang mulai menumpuk batu bata, Arsitek harus membuat gambar kerja. 
                    <br><br>
                    <span class="text-blue-400 font-bold">SKPL adalah gambar kerja tersebut.</span>
                    <br>Tanpa SKPL, programmer akan bingung mau buat apa ("Coding tanpa arah").
                </p>
            </div>
        `
    },

    {
        layout: "section",
        number: "02",
        title: "Tujuan Utama",
        desc: "Mengapa kita harus repot-repot membuat dokumen ini?"
    },
    {
        layout: "content-split",
        title: "1. Kontrak & Komunikasi",
        subtitle: "Jembatan Klien & Developer",
        content: `
            <p class="mb-4">SKPL mencegah kesalahpahaman ("Miscommunication").</p>
            <div class="p-4 glass-card rounded-lg">
                <p class="italic text-sm text-slate-400">"Saya kira fiturnya begini, kok jadinya begitu?"</p>
            </div>
            <p class="mt-4">Dengan SKPL yang disetujui di awal, Klien dan Developer memiliki <strong>satu visi yang sama</strong> tentang hasil akhir.</p>
        `,
        icon: "🤝"
    },
    {
        layout: "content-split",
        title: "2. Estimasi & Validasi",
        subtitle: "Uang, Waktu, dan Kualitas",
        content: `
            <ul class="space-y-4">
                <li class="flex items-start gap-3">
                    <span class="text-blue-400 text-xl">💰</span>
                    <span><strong>Dasar Biaya:</strong> Developer menghitung harga berdasarkan fitur yang tertulis di SKPL.</span>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-blue-400 text-xl">✅</span>
                    <span><strong>Acuan Testing:</strong> Tim QA (Tester) mengecek software berdasarkan poin-poin di SKPL.</span>
                </li>
            </ul>
        `,
        icon: "📊"
    },

    {
        layout: "section",
        number: "03",
        title: "Komponen SKPL",
        desc: "Jantung dari dokumen: Fungsional vs Non-Fungsional"
    },
    {
        layout: "content-center",
        title: "Dua Pilar Utama",
        content: `
            <div class="grid grid-cols-2 gap-8 mt-6">
                <div class="glass-card p-6 rounded-xl border-t-4 border-blue-500">
                    <h3 class="text-xl font-bold text-white mb-2">Fungsional</h3>
                    <p class="text-sm text-slate-400">Behavior (Perilaku)</p>
                    <p class="mt-4 font-semibold text-blue-300">"Apa yang sistem LAKUKAN?"</p>
                </div>
                <div class="glass-card p-6 rounded-xl border-t-4 border-cyan-500">
                    <h3 class="text-xl font-bold text-white mb-2">Non-Fungsional</h3>
                    <p class="text-sm text-slate-400">Quality (Kualitas)</p>
                    <p class="mt-4 font-semibold text-cyan-300">"Bagaimana KINERJA sistem?"</p>
                </div>
            </div>
        `
    },
    {
        layout: "content-split",
        title: "Kebutuhan Fungsional",
        subtitle: "Fitur & Proses Bisnis",
        content: `
            <p>Menjelaskan interaksi antara pengguna dan sistem.</p>
            <div class="mt-4 space-y-2">
                <div class="flex items-center gap-2 text-sm text-slate-300">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Sistem harus bisa mengirim email reset password.
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-300">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Admin dapat mencetak laporan penjualan per bulan.
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-300">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Perhitungan pajak dilakukan otomatis saat checkout.
                </div>
            </div>
        `,
        icon: "⚙️"
    },
    {
        layout: "content-split",
        title: "Kebutuhan Non-Fungsional",
        subtitle: "Constraint / Batasan",
        content: `
            <p>Mendefinisikan standar kualitas sistem (Quality Attributes).</p>
             <div class="mt-4 space-y-2">
                <div class="flex items-center gap-2 text-sm text-slate-300">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <strong>Performance:</strong> Load halaman < 2 detik.
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-300">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <strong>Security:</strong> Password terenkripsi SHA-256.
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-300">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <strong>Availability:</strong> Server Uptime 99.9%.
                </div>
            </div>
        `,
        icon: "🛡️"
    },
    {
        layout: "content-center",
        title: "Contoh Perbandingan",
        content: `
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="border-b border-slate-600 text-blue-400">
                        <th class="p-4">Aspek</th>
                        <th class="p-4">Fungsional</th>
                        <th class="p-4">Non-Fungsional</th>
                    </tr>
                </thead>
                <tbody class="text-slate-300">
                    <tr class="bg-white/5">
                        <td class="p-4 font-bold">Konteks</td>
                        <td class="p-4">Fitur Login</td>
                        <td class="p-4">Kecepatan Login</td>
                    </tr>
                    <tr>
                        <td class="p-4 font-bold">Pernyataan</td>
                        <td class="p-4">"User memasukkan ID & Password"</td>
                        <td class="p-4">"Proses verifikasi max 1 detik"</td>
                    </tr>
                </tbody>
            </table>
        `
    },

    {
        layout: "section",
        number: "04",
        title: "Struktur Dokumen",
        desc: "Standar Internasional IEEE 830"
    },
    {
        layout: "content-split",
        title: "Struktur IEEE 830",
        subtitle: "Standar yang paling umum digunakan",
        content: `
            <ol class="list-decimal list-inside space-y-4 text-slate-300">
                <li>
                    <strong>Pendahuluan:</strong> Tujuan, ruang lingkup, definisi istilah.
                </li>
                <li>
                    <strong>Deskripsi Umum:</strong> Perspektif produk, karakteristik user, lingkungan operasi.
                </li>
                <li>
                    <strong>Kebutuhan Spesifik:</strong> Detail lengkap kebutuhan fungsional, antarmuka (UI), dan database.
                </li>
            </ol>
        `,
        icon: "📑"
    },

    {
        layout: "section",
        number: "05",
        title: "Karakteristik Baik",
        desc: "Bagaimana menulis SKPL agar tidak membingungkan?"
    },
    {
        layout: "content-center",
        title: "1. Tidak Ambigu & Jelas",
        content: `
            <div class="flex flex-col gap-6">
                <div class="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                    <span class="text-red-400 font-bold text-xs uppercase">❌ Ambigu (Salah)</span>
                    <p class="text-lg">"Sistem harus memiliki antarmuka yang <u>bagus</u> dan <u>cepat</u>."</p>
                    <p class="text-xs text-slate-500 mt-1">Definisi "bagus" itu subjektif.</p>
                </div>
                <div class="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                    <span class="text-green-400 font-bold text-xs uppercase">✅ Jelas (Benar)</span>
                    <p class="text-lg">"Sistem menggunakan tema warna biru (#0000FF) dan merespon input < 1 detik."</p>
                </div>
            </div>
        `
    },
    {
        layout: "content-split",
        title: "2. Lengkap & Konsisten",
        subtitle: "Complete & Consistent",
        content: `
            <ul class="space-y-4">
                <li>
                    <strong>Lengkap:</strong> Semua situasi harus didefinisikan. Misalnya: Apa yang terjadi jika internet mati saat transaksi? SKPL harus menjawabnya.
                </li>
                <li>
                    <strong>Konsisten:</strong> Tidak boleh ada pernyataan yang bertabrakan.
                    <br><span class="text-sm text-slate-400 italic">Contoh konflik: Meminta enkripsi super berat tapi meminta hardware spesifikasi rendah.</span>
                </li>
            </ul>
        `,
        icon: "✨"
    },
    {
        layout: "content-center",
        title: "3. Dapat Diverifikasi (Testable)",
        content: `
            <p class="text-center mb-8 text-xl">Setiap kalimat dalam SKPL harus bisa dibuktikan BENAR atau SALAH oleh Tester.</p>
            <div class="grid grid-cols-2 gap-4">
                <div class="glass-card p-4 text-center">
                    <h4 class="text-slate-400 text-sm">Sulit Dites</h4>
                    <p class="font-bold text-red-400">"User Friendly"</p>
                </div>
                <div class="glass-card p-4 text-center">
                    <h4 class="text-slate-400 text-sm">Mudah Dites</h4>
                    <p class="font-bold text-green-400">"User baru bisa posting dalam 3 klik"</p>
                </div>
            </div>
        `
    },

    {
        layout: "hero",
        title: "Q & A",
        subtitle: "Sesi Tanya Jawab",
        desc: "Silakan tanyakan hal yang belum jelas mengenai SKPL",
        tag: "Diskusi Interaktif"
    },
    {
        layout: "hero",
        title: "Terima Kasih",
        subtitle: "Semoga Bermanfaat",
        desc: "Presentasi SKPL Selesai",
        tag: "End of Presentation"
    }
];


let currentIndex = 0;
const container = document.getElementById('slide-container');
const slideNumber = document.getElementById('slide-number');
const progressBar = document.getElementById('progress-bar');
const slideTotal = document.getElementById('slide-total');

slideTotal.innerText = `/ ${slides.length} SLIDE`;

function renderSlide(index) {
    const data = slides[index];
    let html = '';

    container.classList.remove('opacity-0');
    void container.offsetWidth; // trigger reflow

    switch(data.layout) {
        case 'hero':
            html = `
                <div class="text-center animate-fade-scale">
                    <span class="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6 tracking-wider uppercase">${data.tag}</span>
                    <h1 class="text-6xl md:text-8xl font-bold text-white mb-4 text-blue-glow tracking-tight">${data.title}</h1>
                    <h2 class="text-2xl md:text-3xl text-slate-300 font-light mb-8">${data.subtitle}</h2>
                    <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
                    <p class="text-slate-400">${data.desc}</p>
                </div>
            `;
            break;

        case 'team':
            const membersHtml = data.members.map(m => `
                <div class="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition hover:-translate-y-2 duration-300 group">
                    <div class="relative w-24 h-24 mb-4">
                        <div class="absolute inset-0 bg-blue-500 rounded-full blur opacity-40 group-hover:opacity-70 transition"></div>
                        <img src="${m.img}" class="relative w-full h-full rounded-full border-2 border-slate-600 object-cover">
                    </div>
                    <h3 class="text-xl font-bold text-white">${m.name}</h3>
                    <p class="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">${m.role}</p>
                    <p class="text-slate-400 text-sm">${m.desc}</p>
                </div>
            `).join('');
            
            html = `
                <div class="w-full max-w-5xl animate-fade-scale">
                    <h2 class="text-4xl font-bold text-center text-white mb-12"><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">${data.title}</span></h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${membersHtml}
                    </div>
                </div>
            `;
            break;

        case 'section':
            html = `
                <div class="flex items-center gap-8 animate-slide-in">
                    <div class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500/20 to-transparent select-none leading-none">
                        ${data.number}
                    </div>
                    <div>
                        <h2 class="text-5xl md:text-6xl font-bold text-white mb-4">${data.title}</h2>
                        <p class="text-xl text-blue-200 border-l-4 border-blue-500 pl-4">${data.desc}</p>
                    </div>
                </div>
            `;
            break;

        case 'content-split':
            html = `
                <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 items-center animate-fade-scale">
                    <div class="md:col-span-7">
                        <h2 class="text-4xl font-bold text-white mb-2">${data.title}</h2>
                        <h3 class="text-xl text-blue-400 mb-8 font-light">${data.subtitle}</h3>
                        <div class="text-lg text-slate-300 leading-relaxed space-y-4">
                            ${data.content}
                        </div>
                    </div>
                    <div class="md:col-span-5 flex justify-center">
                        <div class="w-64 h-64 glass-card rounded-full flex items-center justify-center text-8xl animate-float shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                            ${data.icon}
                        </div>
                    </div>
                </div>
            `;
            break;

        case 'content-center':
            html = `
                <div class="w-full max-w-4xl animate-fade-scale">
                    <h2 class="text-4xl font-bold text-center text-white mb-8 border-b border-slate-700 pb-6">${data.title}</h2>
                    <div class="text-lg text-slate-300">
                        ${data.content}
                    </div>
                </div>
            `;
            break;
    }

    container.innerHTML = html;
    updateUI();
}

function updateUI() {
    slideNumber.innerText = (currentIndex + 1).toString().padStart(2, '0');
    
    const progress = ((currentIndex + 1) / slides.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        renderSlide(currentIndex);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        renderSlide(currentIndex);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

renderSlide(0);
const slides = [
    {
        layout: "hero",
        title: "SKPL / SRS",
        subtitle: "Spesifikasi Kebutuhan Perangkat Lunak",
        desc: "Panduan Pengembangan Modern & Responsif",
        tag: "Rekayasa Perangkat Lunak"
    },
    {
        layout: "team",
        title: "Tim Penyusun",
        members: [
            { name: "AK Prisma", role: "Speaker I", img: "prisma.png" },
            { name: "Raihan A", role: "MC", img: "rehan.png" },
            { name: "M Faiz", role: "Speaker II", img: "faiz.png" }
        ]
    },
    { layout: "section", number: "01", title: "Pengenalan", desc: "Dasar & Definisi SKPL" },
    {
        layout: "content-split",
        title: "Apa itu SKPL?",
        subtitle: "Software Requirements Specification",
        content: `<p>Dokumen formal yang menjelaskan <strong>apa yang harus dilakukan</strong> oleh software.</p>`,
        icon: "📘"
    },
    {
        layout: "content-center",
        title: "Analogi",
        content: `
            <div class="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20">
                <h3 class="text-xl font-bold text-white mb-2">🏠 Cetak Biru (Blueprint)</h3>
                <p class="text-sm md:text-base text-slate-300">Seperti arsitek butuh gambar kerja sebelum membangun rumah, developer butuh SKPL sebelum coding.</p>
            </div>
        `
    },
    { layout: "section", number: "02", title: "Tujuan Utama", desc: "Kenapa harus buat SKPL?" },
    {
        layout: "content-split",
        title: "1. Kontrak Kerja",
        subtitle: "Antara Klien & Developer",
        content: `<p>Menghindari kesalahpahaman fitur ("Saya kira fiturnya begini..."). Menyamakan visi sejak awal.</p>`,
        icon: "🤝"
    },
    {
        layout: "content-split",
        title: "2. Dasar Estimasi",
        subtitle: "Biaya & Waktu",
        content: `<p>Developer tidak bisa menghitung harga proyek jika tidak tahu detail fiturnya.</p>`,
        icon: "💰"
    },
    { layout: "section", number: "03", title: "Komponen", desc: "Fungsional & Non-Fungsional" },
    {
        layout: "content-center",
        title: "Dua Jenis Kebutuhan",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="glass-card p-4 rounded-xl border-t-4 border-blue-500">
                    <h4 class="font-bold text-white">Fungsional</h4>
                    <p class="text-xs text-slate-400 mt-1">Apa yang sistem LAKUKAN (Fitur).</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-t-4 border-cyan-500">
                    <h4 class="font-bold text-white">Non-Fungsional</h4>
                    <p class="text-xs text-slate-400 mt-1">Bagaimana KINERJA sistem (Kualitas).</p>
                </div>
            </div>
        `
    },
    {
        layout: "content-split",
        title: "Contoh Fungsional",
        subtitle: "Fitur / Input-Output",
        content: `
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-300">
            <li>User login dengan email.</li>
            <li>Sistem mengirim email notifikasi.</li>
            <li>Admin cetak laporan PDF.</li>
        </ul>`,
        icon: "⚙️"
    },
    {
        layout: "content-split",
        title: "Contoh Non-Fungsional",
        subtitle: "Performance / Security",
        content: `
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-300">
            <li>Loading page < 2 detik.</li>
            <li>Enkripsi data password.</li>
            <li>Support 1000 user bersamaan.</li>
        </ul>`,
        icon: "🚀"
    },
    {
        layout: "content-center",
        title: "Tabel Perbandingan",
        content: `
            <div class="w-full overflow-x-auto custom-scroll pb-2">
                <table class="w-full text-left min-w-[300px]">
                    <thead class="text-blue-400 border-b border-slate-700">
                        <tr><th class="p-2">Aspek</th><th class="p-2">Fungsional</th><th class="p-2">Non-Fungsional</th></tr>
                    </thead>
                    <tbody class="text-slate-300 text-sm">
                        <tr class="bg-white/5"><td class="p-2 font-bold">Fokus</td><td class="p-2">Fitur</td><td class="p-2">Kualitas</td></tr>
                        <tr><td class="p-2 font-bold">Contoh</td><td class="p-2">Tombol 'Bayar'</td><td class="p-2">Keamanan Transaksi</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    { layout: "section", number: "04", title: "Struktur Dokumen", desc: "Standar IEEE 830" },
    {
        layout: "content-center",
        title: "Isi Dokumen IEEE 830",
        content: `
            <div class="space-y-2 text-left max-w-lg mx-auto">
                <div class="p-3 bg-slate-800 rounded flex gap-3 items-center">
                    <span class="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
                    <span>Pendahuluan (Tujuan & Lingkup)</span>
                </div>
                <div class="p-3 bg-slate-800 rounded flex gap-3 items-center">
                    <span class="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
                    <span>Deskripsi Umum (User & Batasan)</span>
                </div>
                <div class="p-3 bg-slate-800 rounded flex gap-3 items-center">
                    <span class="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">3</span>
                    <span>Spesifikasi Detail (Kebutuhan Rinci)</span>
                </div>
            </div>
        `
    },
    { layout: "section", number: "05", title: "Karakteristik", desc: "SKPL yang Baik" },
    {
        layout: "content-split",
        title: "1. Tidak Ambigu",
        subtitle: "Harus Jelas & Pasti",
        content: `<p class="text-red-400 text-sm">❌ "Aplikasi harus cepat." (Salah)</p><p class="text-green-400 text-sm mt-2">✅ "Loading < 2 detik." (Benar)</p>`,
        icon: "🎯"
    },
    {
        layout: "content-split",
        title: "2. Testable",
        subtitle: "Dapat Diuji",
        content: `<p>Setiap kalimat kebutuhan harus bisa diverifikasi oleh Tester (QA) apakah sudah terpenuhi atau belum.</p>`,
        icon: "✅"
    },
    { layout: "hero", title: "Q & A", subtitle: "Sesi Tanya Jawab", desc: "Terima Kasih", tag: "Selesai" },
    { layout: "hero", title: "Terima Kasih", subtitle: "Sampai Jumpa", desc: "Created with HTML & Tailwind", tag: "End" }
];

let currentIndex = 0;
const container = document.getElementById('slide-container');
const slideNumber = document.getElementById('slide-number');
const progressBar = document.getElementById('progress-bar');
const slideTotal = document.getElementById('slide-total');

slideTotal.innerText = `/ ${slides.length}`;


function renderSlide(index) {
    const data = slides[index];
    let html = '';

    container.classList.remove('opacity-0');
    void container.offsetWidth; 

    switch(data.layout) {
        case 'hero':
            html = `
                <div class="text-center animate-fade-scale w-full px-4">
                    <span class="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wider uppercase">${data.tag}</span>
                    <h1 class="text-4xl md:text-7xl font-bold text-white mb-2 md:mb-4 text-blue-glow tracking-tight leading-tight">${data.title}</h1>
                    <h2 class="text-lg md:text-3xl text-slate-300 font-light mb-6 md:mb-8">${data.subtitle}</h2>
                    <p class="text-slate-400 text-sm md:text-base">${data.desc}</p>
                </div>
            `;
            break;

        case 'team':
            const membersHtml = data.members.map(m => `
                <div class="glass-card p-4 md:p-6 rounded-2xl flex flex-row md:flex-col items-center gap-4 md:gap-0 text-left md:text-center hover:bg-white/5 transition">
                    <img src="${m.img}" class="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-slate-600 object-cover mb-0 md:mb-4">
                    <div>
                        <h3 class="text-lg md:text-xl font-bold text-white">${m.name}</h3>
                        <p class="text-blue-400 text-xs font-bold uppercase tracking-wider">${m.role}</p>
                    </div>
                </div>
            `).join('');
            
            html = `
                <div class="w-full max-w-4xl animate-fade-scale text-center px-4">
                    <h2 class="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-12">${data.title}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        ${membersHtml}
                    </div>
                </div>
            `;
            break;

        case 'section':
            html = `
                <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8 animate-slide-in text-center md:text-left px-4">
                    <div class="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500/20 to-transparent leading-none">
                        ${data.number}
                    </div>
                    <div>
                        <h2 class="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4">${data.title}</h2>
                        <p class="text-sm md:text-xl text-blue-200 border-t md:border-t-0 md:border-l-4 border-blue-500 pt-2 md:pt-0 pl-0 md:pl-4">${data.desc}</p>
                    </div>
                </div>
            `;
            break;

        case 'content-split':
            html = `
                <div class="w-full max-w-6xl flex flex-col-reverse md:grid md:grid-cols-12 gap-6 md:gap-10 items-center animate-fade-scale px-4">
                    <div class="md:col-span-7 text-center md:text-left">
                        <h2 class="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">${data.title}</h2>
                        <h3 class="text-lg md:text-xl text-blue-400 mb-4 md:mb-6 font-light">${data.subtitle}</h3>
                        <div class="text-sm md:text-lg text-slate-300 leading-relaxed space-y-2 md:space-y-4">
                            ${data.content}
                        </div>
                    </div>
                    <div class="md:col-span-5 flex justify-center">
                        <div class="w-32 h-32 md:w-56 md:h-56 glass-card rounded-full flex items-center justify-center text-6xl md:text-8xl animate-float shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            ${data.icon}
                        </div>
                    </div>
                </div>
            `;
            break;

        case 'content-center':
            html = `
                <div class="w-full max-w-4xl animate-fade-scale px-4 text-center">
                    <h2 class="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 border-b border-slate-700 pb-4">${data.title}</h2>
                    <div class="text-base md:text-lg text-slate-300">
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

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
        nextSlide();
    }
    if (touchEndX > touchStartX + threshold) {
        prevSlide();
    }
}

renderSlide(0);
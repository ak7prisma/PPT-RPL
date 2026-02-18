const slides = [

    {
        layout: "hero",
        tag: "Rekayasa Perangkat Lunak",
        title: "SKPL / SRS",
        subtitle: "Spesifikasi Kebutuhan Perangkat Lunak",
        desc: "Panduan Teknis, Standarisasi Dokumen & Best Practice",
        icon: "book-open-check" 
    },

    {
        layout: "team",
        tag: "Introduction",
        title: "Tim Penyusun",
        members: [
            { name: "Raihan A", role: "Speaker I", img: "public/rehan.png" },
            { name: "AK Prisma", role: "Speaker II", img: "public/prisma.png" },
            { name: "M Faiz", role: "Speaker III", img: "public/faiz.png" }
        ]
    },

    { layout: "chapter", number: "01", title: "Pengenalan", desc: "Dasar & Definisi SKPL" },
    

    {
        layout: "split",
        align: "right",
        title: "Apa itu SKPL?",
        subtitle: "Software Requirements Specification",
        content: `
            <p class="mb-4 text-lg">Dokumen formal yang menjelaskan <strong>apa yang harus dilakukan</strong> oleh software (Behavior) dan batasan-batasannya.</p>
            <div class="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r">
                <p class="text-sm italic text-blue-200">"Tanpa SKPL, developer seperti membangun rumah tanpa gambar arsitek."</p>
            </div>
        `,
        image: "public/skpl.png",
        icon: "file-text"
    },

    {
        layout: "center",
        title: "Analogi Sederhana",
        content: `
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
                <div class="text-center">
                    <div class="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-600"><i data-lucide="home" class="w-8 h-8 text-blue-400"></i></div>
                    <h3 class="font-bold">Blueprint</h3>
                    <p class="text-sm text-slate-400">Gambar Kerja Arsitek</p>
                </div>
                <i data-lucide="arrow-right" class="hidden md:block w-8 h-8 text-slate-600"></i>
                <i data-lucide="arrow-down" class="md:hidden w-8 h-8 text-slate-600"></i>
                <div class="text-center">
                    <div class="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-600"><i data-lucide="code-2" class="w-8 h-8 text-green-400"></i></div>
                    <h3 class="font-bold">SKPL</h3>
                    <p class="text-sm text-slate-400">Acuan Programmer</p>
                </div>
            </div>
        `
    },

    { layout: "chapter", number: "02", title: "Tujuan Utama", desc: "Mengapa harus ada?" },
    

    {
        layout: "split",
        align: "left",
        title: "1. Kontrak Kerja",
        subtitle: "Antara Klien & Developer",
        content: `
            <ul class="space-y-4">
                <li class="flex gap-3">
                    <i data-lucide="check-circle" class="text-green-400 flex-shrink-0"></i>
                    <span>Menghindari kesalahpahaman fitur di tengah jalan.</span>
                </li>
                <li class="flex gap-3">
                    <i data-lucide="check-circle" class="text-green-400 flex-shrink-0"></i>
                    <span>Menyamakan visi produk sejak awal (Scope of Work).</span>
                </li>
            </ul>
        `,
        image: "public/kontrak.png",
        icon: "handshake"
    },

    {
        layout: "split",
        align: "right",
        title: "2. Dasar Estimasi",
        subtitle: "Biaya & Waktu (Timeline)",
        content: `
            <p class="mb-4">Developer tidak bisa menghitung harga proyek jika tidak tahu detail fiturnya.</p>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-800 p-3 rounded text-center border border-slate-700">
                    <i data-lucide="coins" class="mx-auto mb-2 text-yellow-400"></i>
                    <span class="text-sm font-bold">Budgeting</span>
                </div>
                <div class="bg-slate-800 p-3 rounded text-center border border-slate-700">
                    <i data-lucide="calendar-clock" class="mx-auto mb-2 text-blue-400"></i>
                    <span class="text-sm font-bold">Timeline</span>
                </div>
            </div>
        `,
        image: "public/estimasi.png",
        icon: "calculator"
    },

    { layout: "chapter", number: "03", title: "Komponen", desc: "Isi Dokumen SKPL" },


    {
        layout: "cards",
        title: "Dua Jenis Kebutuhan",
        cards: [
            { title: "Fungsional", desc: "Apa yang sistem LAKUKAN (Fitur & Proses)", icon: "cog" },
            { title: "Non-Fungsional", desc: "Bagaimana KINERJA sistem (Kualitas & Batasan)", icon: "shield-check" }
        ]
    },

    {
        layout: "split",
        align: "left",
        title: "Kebutuhan Fungsional",
        subtitle: "Functional Requirements",
        content: `
            <p class="mb-4">Berisi daftar fitur yang bisa digunakan user.</p>
            <div class="bg-slate-800/50 p-4 rounded border border-slate-600">
                <h4 class="text-blue-400 font-bold text-sm mb-2 uppercase tracking-wide">Contoh Nyata:</h4>
                <ul class="space-y-2 text-sm">
                    <li>• User melakukan login dengan email.</li>
                    <li>• Sistem mengirim notifikasi pesanan.</li>
                    <li>• Admin mencetak laporan PDF bulanan.</li>
                </ul>
            </div>
        `,
        image: "public/functional.png",
        icon: "puzzle"
    },

    {
        layout: "split",
        align: "right",
        title: "Non-Fungsional",
        subtitle: "Quality Attributes",
        content: `
            <p class="mb-4">Kualitas dibalik layar yang menjaga sistem tetap berjalan baik.</p>
            <ul class="space-y-3">
                <li class="flex items-center gap-3">
                    <i data-lucide="zap" class="text-yellow-400"></i>
                    <div>
                        <strong class="block text-white">Performance</strong>
                        <span class="text-sm text-slate-400">Loading page < 2 detik.</span>
                    </div>
                </li>
                <li class="flex items-center gap-3">
                    <i data-lucide="lock" class="text-red-400"></i>
                    <div>
                        <strong class="block text-white">Security</strong>
                        <span class="text-sm text-slate-400">Password terenkripsi Hash.</span>
                    </div>
                </li>
            </ul>
        `,
        image: "public/nonfunct.png",
        icon: "server"
    },

    {
        layout: "table",
        title: "Ringkasan Perbedaan",
        tableHeaders: ["Aspek", "Fungsional", "Non-Fungsional"],
        tableRows: [
            ["Fokus Utama", "Fitur (Features)", "Kualitas (Quality)"],
            ["Pertanyaan", "\"Apa yang dilakukan?\"", "\"Seberapa baik?\""],
            ["Contoh", "Tombol 'Beli', Login", "Cepat, Aman, 24/7"]
        ]
    },

    { layout: "chapter", number: "04", title: "Struktur Dokumen", desc: "Standar IEEE 830" },


    {
        layout: "center",
        title: "Struktur IEEE 830",
        content: `
            <div class="max-w-2xl mx-auto space-y-4 text-left">
                <div class="flex gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition">
                    <div class="text-3xl font-bold text-slate-600">01</div>
                    <div>
                        <h4 class="text-xl font-bold text-white">Pendahuluan (Introduction)</h4>
                        <p class="text-slate-400 text-sm">Menjelaskan tujuan dokumen, ruang lingkup produk, dan definisi istilah.</p>
                    </div>
                </div>
                <div class="flex gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition">
                    <div class="text-3xl font-bold text-slate-600">02</div>
                    <div>
                        <h4 class="text-xl font-bold text-white">Deskripsi Umum</h4>
                        <p class="text-slate-400 text-sm">Karakteristik user, batasan sistem, dan asumsi pengembangan.</p>
                    </div>
                </div>
                <div class="flex gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition">
                    <div class="text-3xl font-bold text-slate-600">03</div>
                    <div>
                        <h4 class="text-xl font-bold text-white">Specific Requirements</h4>
                        <p class="text-slate-400 text-sm">Bagian paling tebal. Berisi detail teknis semua fitur fungsional & non-fungsional.</p>
                    </div>
                </div>
            </div>
        `
    },

    { layout: "chapter", number: "05", title: "Karakteristik", desc: "SKPL yang Baik" },


    {
        layout: "split",
        align: "left",
        title: "1. Tidak Ambigu",
        subtitle: "Harus Jelas & Pasti",
        content: `
            <div class="space-y-4">
                <div class="p-4 bg-red-900/20 border border-red-500/30 rounded">
                    <div class="flex items-center gap-2 mb-1 text-red-400 font-bold"><i data-lucide="x-circle" class="w-4"></i> SALAH</div>
                    <p>"Aplikasi harus cepat."</p>
                    <span class="text-xs text-slate-500">(Cepat itu berapa detik? Relatif)</span>
                </div>
                <div class="p-4 bg-green-900/20 border border-green-500/30 rounded">
                    <div class="flex items-center gap-2 mb-1 text-green-400 font-bold"><i data-lucide="check-circle" class="w-4"></i> BENAR</div>
                    <p>"Loading page harus di bawah 2 detik."</p>
                    <span class="text-xs text-slate-500">(Terukur angka pasti)</span>
                </div>
            </div>
        `,
        image: "public/tidakambigu.png",
        icon: "alert-triangle"
    },

    {
        layout: "center",
        title: "2. Testable (Dapat Diuji)",
        content: `
            <div class="text-center max-w-xl mx-auto">
                <div class="bg-slate-800 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="flask-conical" class="w-10 h-10 text-purple-400"></i>
                </div>
                <p class="text-lg leading-relaxed">
                    Setiap kalimat kebutuhan harus bisa diverifikasi oleh Tester (QA). 
                    Jika kebutuhan tidak bisa dites (abstrak), maka kebutuhan itu <strong>gagal</strong>.
                </p>
            </div>
        `
    },

    {
        layout: "hero",
        tag: "Session",
        title: "Q & A",
        subtitle: "Sesi Tanya Jawab",
        desc: "Silakan tanyakan hal yang belum jelas.",
        icon: "message-circle-question"
    },

    {
        layout: "hero",
        tag: "Selesai",
        title: "Terima Kasih",
        subtitle: "Sampai Jumpa",
        desc: "SKPL / SRS Presentation",
        icon: "check-check"
    }
];
let currentIndex = 0;
const container = document.getElementById('slide-container');
const slideNumber = document.getElementById('slide-number');
const progressBar = document.getElementById('progress-bar');
const slideTitleMini = document.getElementById('slide-title-mini');
const slideCategory = document.getElementById('slide-category');

function renderSlide(index) {
    const data = slides[index]; 
    let html = '';
    
    container.innerHTML = ''; 
    container.className = 'relative z-10 flex-grow flex flex-col justify-center items-center px-6 md:px-16 w-full max-w-7xl mx-auto';

    const generateImage = (url) => {
        if(!url) return '';
        return `
            <div class="slide-image-container h-60 md:h-80 w-full animate-enter animate-delay-2 relative group">
                <img src="${url}" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
            </div>
        `;
    };

    switch(data.layout) {
        
        case 'hero':
            html = `
                <div class="text-center max-w-4xl animate-enter">
                    <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 text-blue-400 mb-8 shadow-lg shadow-blue-900/20">
                        <i data-lucide="${data.icon || 'star'}" class="w-10 h-10"></i>
                    </div>
                    <div class="mb-6"><span class="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest">${data.tag || 'Slide'}</span></div>
                    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">${data.title}</h1>
                    <h2 class="text-xl md:text-2xl text-slate-400 font-light mb-8">${data.subtitle || ''}</h2>
                    <p class="text-slate-500">${data.desc || ''}</p>
                </div>`;
            break;

        case 'chapter':
            html = `
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 animate-enter">
                    <div class="text-8xl md:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500/30 to-transparent leading-none select-none">
                        ${data.number}
                    </div>
                    <div class="text-center md:text-left">
                        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">${data.title}</h2>
                        <div class="h-1 w-24 bg-blue-500 mx-auto md:mx-0 mb-4 rounded-full"></div>
                        <p class="text-xl text-slate-400">${data.desc}</p>
                    </div>
                </div>`;
            break;

        case 'split':
            const imgBlock = `<div class="w-full">${generateImage(data.image)}</div>`;
            const textBlock = `
                <div class="text-left">
                    <div class="flex items-center gap-3 mb-4 text-blue-400">
                        <i data-lucide="${data.icon || 'circle'}" class="w-6 h-6"></i>
                        <span class="text-sm font-bold uppercase tracking-widest">Detail</span>
                    </div>
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-2">${data.title}</h2>
                    <h3 class="text-xl text-slate-400 mb-6 font-light">${data.subtitle || ''}</h3>
                    <div class="text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                        ${data.content}
                    </div>
                </div>`;
            
            html = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full animate-enter">
                    ${data.align === 'right' ? textBlock + imgBlock : imgBlock + textBlock}
                </div>`;
            break;

        case 'team':
            html = `
                <div class="w-full text-center animate-enter">
                    <h2 class="text-4xl font-bold text-white mb-12">${data.title}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        ${data.members.map(m => `
                            <div class="glass-panel p-6 rounded-2xl hover:bg-slate-800/50 transition duration-300 group">
                                <div class="relative w-24 h-24 mx-auto mb-4">
                                    <img src="${m.img}" class="w-full h-full rounded-full object-cover border-2 border-slate-600 group-hover:border-blue-500 transition">
                                </div>
                                <h3 class="text-xl font-bold text-white">${m.name}</h3>
                                <p class="text-blue-400 text-sm font-semibold uppercase tracking-wider mt-1">${m.role}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>`;
            break;

        case 'cards':
            html = `
                <div class="w-full max-w-5xl animate-enter text-center">
                    <h2 class="text-4xl font-bold text-white mb-10">${data.title}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        ${data.cards.map(c => `
                            <div class="glass-panel p-8 rounded-xl text-left hover:-translate-y-2 transition duration-300 border-t-4 border-blue-500/50">
                                <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                                    <i data-lucide="${c.icon}"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-2">${c.title}</h3>
                                <p class="text-slate-400 leading-relaxed">${c.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>`;
            break;

        case 'table':
            html = `
                <div class="w-full max-w-4xl animate-enter">
                    <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-8">${data.title}</h2>
                    <div class="glass-panel rounded-xl overflow-hidden border border-slate-700">
                        <div class="overflow-x-auto custom-scroll">
                            <table class="w-full text-left min-w-[600px]">
                                <thead class="bg-slate-900/80 text-blue-400 uppercase text-xs font-bold tracking-wider">
                                    <tr>
                                        ${data.tableHeaders.map(h => `<th class="p-4 md:p-6 border-b border-slate-700">${h}</th>`).join('')}
                                    </tr>
                                </thead>
                                <tbody class="text-slate-300 divide-y divide-slate-800">
                                    ${data.tableRows.map(row => `
                                        <tr class="hover:bg-white/5 transition">
                                            ${row.map((cell, i) => `<td class="p-4 md:p-6 ${i===0 ? 'font-bold text-white':''}">${cell}</td>`).join('')}
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
            break;

        case 'center':
            html = `
                <div class="text-center max-w-3xl animate-enter">
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-8">${data.title}</h2>
                    <div class="text-lg md:text-xl text-slate-300 leading-relaxed">
                        ${data.content}
                    </div>
                </div>`;
            break;
    }

    container.innerHTML = html;
    
    slideNumber.innerText = (currentIndex + 1).toString().padStart(2, '0');
    progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
    
    if(slideTitleMini) slideTitleMini.innerText = data.title;
    if(slideCategory) slideCategory.innerText = data.number ? `Chapter ${data.number}` : (data.tag || 'Slide');

    lucide.createIcons();
}

function nextSlide() {
    if (currentIndex < slides.length - 1) { currentIndex++; renderSlide(currentIndex); }
}
function prevSlide() {
    if (currentIndex > 0) { currentIndex--; renderSlide(currentIndex); }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
    if (e.key === 'ArrowLeft' || e.key === 'Backspace') prevSlide();
});

let touchStartX = 0;
document.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
document.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
});

renderSlide(0);
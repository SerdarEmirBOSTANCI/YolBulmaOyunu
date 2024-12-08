document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.querySelector('.download-btn');

    // Basit bir animasyon efekti
    downloadBtn.addEventListener('mouseover', function() {
        downloadBtn.style.transform = 'scale(1.1)';
    });

    downloadBtn.addEventListener('mouseout', function() {
        downloadBtn.style.transform = 'scale(1)';
    });
});

// Function to smooth scroll to donation section
function scrollToDonate() {
    const donateSection = document.getElementById('donateSection');
    if (donateSection) {
        // Offset for the sticky header
        const yOffset = -90; 
        const y = donateSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

// Function to copy UPI ID
function copyUPI() {
    const upiText = document.getElementById('upiIdText').innerText;
    
    navigator.clipboard.writeText(upiText).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = upiText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
    });
}

// Show Toast Notification
function showToast() {
    const toast = document.getElementById('toast');
    const copyBtn = document.getElementById('copyBtn');
    
    // Temporarily change button state
    const originalContent = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="ph-fill ph-check"></i><span>Copied</span>';
    copyBtn.style.backgroundColor = '#10b981'; // Green for success
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        copyBtn.innerHTML = originalContent;
        copyBtn.style.backgroundColor = ''; // Reset to default CSS
    }, 3000);
}

// Progress Bar Animation on Load
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to allow initial rendering for animation to be visible
    setTimeout(() => {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = '1%'; // Set the target percentage here
        }
    }, 300);
});

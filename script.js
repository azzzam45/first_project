
// التبديل بين الوضع الداكن والوضع الفاتح
const toggleThemeButton = document.querySelector('.header-icons .icon:nth-child(3)');
let isDarkMode = false;

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
    toggleThemeButton.textContent = isDarkMode ? '☀️' : '🌙';
});

// التبديل بين GPT-3.5 و GPT-4
const modelButtons = document.querySelectorAll('.model-switch button');

modelButtons.forEach(button => {
    button.addEventListener('click', () => {
        modelButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
// تحديد عناصر HTML
const accountIcon = document.querySelector('.header-icons .icon.user');
const accountSettingsModal = document.getElementById('accountSettingsModal');
const closeModalBtn = document.querySelector('.close-btn');

// فتح نافذة إعدادات الحساب عند النقر على أيقونة الحساب
accountIcon.addEventListener('click', () => {
    accountSettingsModal.style.display = 'block';
});

// إغلاق نافذة إعدادات الحساب عند النقر على زر الإغلاق
closeModalBtn.addEventListener('click', () => {
    accountSettingsModal.style.display = 'none';
});

// إغلاق نافذة إعدادات الحساب عند النقر خارج المحتوى
window.addEventListener('click', (event) => {
    if (event.target === accountSettingsModal) {
        accountSettingsModal.style.display = 'none';
    }
});
// استرجاع العناصر
const upgradeButton = document.getElementById('upgrade-button');
const modal = document.getElementById('upgrade-modal');
const closeBtn = document.querySelector('.close-btn');
const paymentForm = document.getElementById('payment-form');

// فتح النافذة عند الضغط على زر الترقية
upgradeButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// إغلاق النافذة عند الضغط على زر الإغلاق
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// إغلاق النافذة عند الضغط في أي مكان خارجها
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// معالجة الدفع
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // منع تحديث الصفحة

    // محاكاة عملية الدفع
    alert('Payment Successful! You have upgraded to PRO.');

    // إغلاق النافذة بعد الدفع
    modal.style.display = 'none';
});



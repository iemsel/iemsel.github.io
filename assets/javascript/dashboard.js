function updateProgress() {
    let totalEC = 0;
    let maxEC = 60;


    document.querySelectorAll('input[type="number"]').forEach(input => {
        const maxECEarned = parseFloat(input.dataset.max);
        const Grade = parseFloat(input.value);
        
        // Changing status, making totalec to all Grade
        if (Grade >= 0) {
            const statusCell = input.parentElement.nextElementSibling.nextElementSibling;

            if (Grade < 5.5) {
                statusCell.textContent = 'Failed';
                statusCell.className = 'failed';
            } else {
                statusCell.textContent = 'Completed';
                statusCell.className = 'completed';
                totalEC += maxECEarned;
            }
        }
    });

    // Progress bar calculation
    let progressPercentage = (totalEC / maxEC) * 100;
    document.getElementById('progress-bar-fill').style.width = progressPercentage + '%';
    document.getElementById('progress-bar-fill').textContent = Math.round(progressPercentage) + '%';
    document.getElementById('total-credits').textContent = totalEC.toFixed(2) + '/60 EC';
}

//when the fuction should run
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateProgress);
});
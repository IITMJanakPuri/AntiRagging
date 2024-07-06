document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('certificateForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        generateCertificate();
    });
});

function generateCertificate() {
    const name = document.getElementById('name').value;
    
    if (!name) {
        alert('Please fill out all fields.');
        return;
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        // Calculate center point for name placement
        const nameCenterX = 999;
        const nameCenterY = 686;

        context.font = 'bold 40px Arial';
        context.fillStyle = '#000';
        context.textAlign = 'center';

        // Place name at calculated center coordinates
        context.fillText(name, nameCenterX, nameCenterY);

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificate.png';

        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
    };

    image.src = 'IITM_Anti_Ragging_Cert.png';
}

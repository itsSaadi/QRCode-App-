function generateQRCode() {
    var url = document.getElementById("urlInput").value
    var qrcodeDiv = document.getElementById("qrcode"); 
    qrcodeDiv.innerHTML = '';

    let qrcode = new QRCode(qrcodeDiv, {
        text: url,
        width: 128,
        height: 128
    })
}
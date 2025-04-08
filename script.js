function showPopup(title, price, imageSrc) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupImage").src = imageSrc;

    document.getElementById("productPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("productPopup").style.display = "none";
}
.action-buttons {
    display: flex;
    gap: 20px;
}

.action-buttons a {
    padding: 12px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.action-buttons a i {
    margin-right: 8px;
}


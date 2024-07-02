// courses popup window
let previewContainer = document.querySelector('.courses-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.card img').forEach(img =>{
    img.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = img.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
}); 

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});





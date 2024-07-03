function showDocument(doc) {
    const content = document.getElementById('content');
    
    switch(doc) {
        case 'doc1':
            content.innerHTML = '<iframe src="documents/doc1.pdf" frameborder="0" width="100%"></iframe>';
            break;
        case 'doc2':
            content.innerHTML = '<iframe src="documents/doc2.pdf" frameborder="0" width="100%"></iframe>';
            break;
        case 'doc3':
            content.innerHTML = '<iframe src="documents/doc3.pdf" frameborder="0" width="100%"></iframe>';
            break;
        default:
            content.innerHTML = '<p>Выберите документ для просмотра.</p>';
    }
}

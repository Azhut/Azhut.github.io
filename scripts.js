function showDocument(doc) {
    const content = document.getElementById('content');
    
    switch(doc) {
        case 'doc1':
            content.innerHTML = '<h2>Документ 1</h2><p>Это содержание документа 1.</p>';
            break;
        case 'doc2':
            content.innerHTML = '<h2>Документ 2</h2><p>Это содержание документа 2.</p>';
            break;
        case 'doc3':
            content.innerHTML = '<h2>Документ 3</h2><p>Это содержание документа 3.</p>';
            break;
        default:
            content.innerHTML = '<p>Выберите документ для просмотра.</p>';
    }
}

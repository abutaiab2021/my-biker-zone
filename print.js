function printContent(el) {
    var restorepage = document.body.innerHTML;
    var printContent = document.getElementById(el).innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = restorepage;
}

printContent('PrintArea');


decode(nvl(dbms_lob.getlength(ITEM_PHOTO), 0), 0, null,
<img src="'||apex_util.get_blob_file_src('P824_ITEM_PHOTO',CS_IT_ID)||'"/>') photo
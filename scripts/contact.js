
/* The script saves form data to a file, imitating form submission */

let formVar = document.getElementsByTagName("form")[0];


  formVar.addEventListener("submit", function (event) {
    event.preventDefault();

  
    const formData = new FormData(formVar);
    const dataObj = Object.fromEntries(formData.entries());
    const jsonString = JSON.stringify(dataObj, null, 2);

  
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "form-data.json";
    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

    formVar.reset();
  });












////////////////////////////
  
// formVar.addEventListener("submit", saveForm);


/*
formVar.addEventListener("submit", async function (event) {
  event.preventDefault();
const formData = new FormData(formVar);
  const dataObj = Object.fromEntries(formData.entries());
  const jsonString = JSON.stringify(dataObj, null, 2);

  try {
    // This instantly triggers the browser's "Save As" dialogue window on the first click
    const handle = await window.showSaveFilePicker({
      suggestedName: 'form-data.json',
      types: [{
        description: 'JSON Files',
        accept: { 'application/json': ['.json'] },
      }],
    });
    
    const writable = await handle.createWritable();
    await writable.write(jsonString);
    await writable.close();
  } catch (err) {
    console.log("User cancelled the save or browser doesn't support it:", err);
  }
});
*/



/*


  //const form = document.getElementById("myForm");

  formVar.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. Gather form values into an object
    const formData = new FormData(formVar);
    const dataObj = Object.fromEntries(formData.entries());
    const jsonString = JSON.stringify(dataObj, null, 2);

    // 2. Create a Blob containing the data
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // 3. Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "form-data.json"; // File name
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // 4. Cleanup
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

*/

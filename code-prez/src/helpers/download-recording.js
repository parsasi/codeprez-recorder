export default function downloadRecording(chunks) {
    var blob = new Blob(chunks, {
      type: "	audio/mpeg"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "CodePrez.weba";
    a.click();
    window.URL.revokeObjectURL(url);
  }
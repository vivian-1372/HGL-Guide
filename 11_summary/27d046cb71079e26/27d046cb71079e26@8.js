function _1(md){return(
md`# Proposal: Acquiring Indigenous Maps 

Here are brief explanatory messages about each of the key findings from the title metadata analysis:

Geographic Scope

The title records were overwhelmingly focused on New England and Massachusetts maps, with limited representation of other regions globally. Expanding the geographic coverage of the collection could better support student and faculty research interests beyond colonial America. The library could consider adding more international and contemporary maps.

Chronological Scope 

While the dates spanned almost 400 years, most titles were for 19th century maps. The collection would benefit from more diversity in date coverage, potentially acquiring more 17th/18th and 20th/21st century materials. This could provide better insight into how geographic knowledge and mapmaking evolved over time.

Representation

The metadata surfaced a concerning lack of diversity in the collection's geographic resources. Indigenous peoples and perspectives were severely underrepresented based on title analysis. Prioritizing acquisitions of maps and materials made by Indigenous mapmakers or featuring Indigenous histories could help increase diversity and inclusion.

Let me know if you would like me to expand on my interpretation of any of these top-level findings from the project. I'm happy to provide additional detail on how the analysis illuminated strengths and weaknesses in collection scope and representation.

Illustration 

Australia has a successful organization in this domain that is worth emulating: https://www.indigenousmaps.com/ `
)}

function _chart(FileAttachment){return(
FileAttachment("chart.svg").image()
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["chart.svg", {url: new URL("./files/f1677fb24e14c3e6f2ce19faa0db60c73f8fc48343c0fe6be3e7168a57fc65149f59fbc354ae9970e748639ec2a7698a9a646ed6a2205a0ccfd4974f13e8e5da.svg", import.meta.url), mimeType: "image/svg+xml", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("chart")).define("chart", ["FileAttachment"], _chart);
  return main;
}

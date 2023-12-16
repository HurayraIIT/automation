export default function extractAccordionJsonContent(htmlString) {
  // Split the HTML content based on the script tag
  const scriptTags = htmlString.split("<script");

  // Find the script tag that contains the JSON schema
  let jsonContent = null;
  for (const script of scriptTags) {
    if (script.includes("application/ld+json") && script.includes("eb-faq-schema-graph--eb-faqeb-accordion")) {
      // Extract and parse the JSON content
      const start = script.indexOf(">") + 1;
      const end = script.indexOf("</script>", start);
      jsonContent = script.substring(start, end).trim();
      break;
    }
  }

  // Check if the JSON schema is found
  return jsonContent;
}

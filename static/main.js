"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom/client");
var predefinedObjects_js_1 = require("./predefinedObjects.js");
var newContainerParent = document.createElement("div");
newContainerParent.setAttribute("id", "body-1");
var plotContainerParentDiv = document.createElement("div");
plotContainerParentDiv.setAttribute("id", "plot-container-parent");
newContainerParent.appendChild(plotContainerParentDiv);
var currContainerParent = document.getElementById("plot-container").parentElement;
var container = document.getElementById("plot-container");
var lcw = container.getAttribute("left-column-width");
document.body.style.setProperty("--left-column-width", container.getAttribute("left-column-width"));
if (!Boolean(Number(lcw)))
    document.body.style.setProperty("--left-column-display", "none");
container.setAttribute("left-column-width", "");
var rcw = container.getAttribute("right-column-width");
document.body.style.setProperty("--right-column-width", container.getAttribute("right-column-width"));
if (!Boolean(Number(rcw)))
    document.body.style.setProperty("--right-column-display", "none");
container.setAttribute("right-column-width", "");
document.body.style.setProperty("--container-position", container.getAttribute("position"));
container.setAttribute("position", "");
document.body.style.setProperty("--container-top", container.getAttribute("top"));
container.setAttribute("top", "");
document.body.style.setProperty("--container-left", container.getAttribute("left"));
container.setAttribute("left", "");
document.body.style.setProperty("--container-width", container.getAttribute("width"));
container.setAttribute("width", "");
document.body.style.setProperty("--container-height", container.getAttribute("height"));
container.setAttribute("height", "");
document.body.style.setProperty("--container-border", container.getAttribute("border"));
container.setAttribute("border", "");
currContainerParent.replaceChild(newContainerParent, container);
plotContainerParentDiv.appendChild(container);
var dpmmDiv = document.createElement("div");
dpmmDiv.setAttribute("id", "dpmm");
plotContainerParentDiv.prepend(dpmmDiv);
var labelsDiv = document.createElement("div");
labelsDiv.setAttribute("id", "labels");
plotContainerParentDiv.prepend(labelsDiv);
var interaction = document.createElement("div");
interaction.setAttribute("id", "interaction");
newContainerParent.prepend(interaction);
////
var lastFieldset = document.createElement("fieldset");
lastFieldset.setAttribute("id", "interaction-last-fieldset");
interaction.prepend(lastFieldset);
var lastFieldsetLegend = document.createElement("legend");
lastFieldsetLegend.innerText = "DOWNLOAD";
lastFieldset.appendChild(lastFieldsetLegend);
var lastFieldsetButton = document.createElement("button");
lastFieldsetButton.setAttribute("id", "download");
lastFieldsetButton.innerText = "Download SVG";
lastFieldset.appendChild(lastFieldsetButton);
var wrapperFieldset = document.createElement("fieldset");
wrapperFieldset.setAttribute("id", "wrapper-fieldset");
interaction.prepend(wrapperFieldset);
var wrapperFieldsetLegend = document.createElement("legend");
wrapperFieldsetLegend.innerText = "VIEWING MODES";
wrapperFieldset.appendChild(wrapperFieldsetLegend);
var wrapperFieldsetInput = document.createElement("div");
wrapperFieldsetInput.setAttribute("id", "input");
wrapperFieldset.appendChild(wrapperFieldsetInput);
var wrapperFieldsetInputInput = document.createElement("input");
wrapperFieldsetInputInput.setAttribute("id", "checkbox-input");
wrapperFieldsetInputInput.setAttribute("type", "checkbox");
wrapperFieldsetInputInput.setAttribute("name", "collapse");
wrapperFieldsetInput.appendChild(wrapperFieldsetInputInput);
var wrapperFieldsetInputLabel = document.createElement("label");
wrapperFieldsetInputLabel.setAttribute("for", "collapse");
wrapperFieldsetInputLabel.innerText = " Collapse";
wrapperFieldsetInput.appendChild(wrapperFieldsetInputLabel);
var wrapperFieldsetInput1 = document.createElement("div");
wrapperFieldsetInput1.setAttribute("id", "input1");
wrapperFieldset.appendChild(wrapperFieldsetInput1);
var wrapperFieldsetInput1Input = document.createElement("input");
wrapperFieldsetInput1Input.setAttribute("id", "e-input");
wrapperFieldsetInput1Input.setAttribute("type", "checkbox");
wrapperFieldsetInput1Input.setAttribute("name", "e-value");
wrapperFieldsetInput1Input.setAttribute("disabled", "disabled");
wrapperFieldsetInput1.appendChild(wrapperFieldsetInput1Input);
var wrapperFieldsetInput1Label = document.createElement("label");
wrapperFieldsetInput1Label.setAttribute("id", "e-label");
wrapperFieldsetInput1Label.setAttribute("for", "e-value");
wrapperFieldsetInput1Label.innerText = " Filter by e-value: ";
wrapperFieldsetInput1.appendChild(wrapperFieldsetInput1Label);
var wrapperFieldsetInput1Text = document.createElement("input");
wrapperFieldsetInput1Text.setAttribute("id", "e-text");
wrapperFieldsetInput1Text.setAttribute("type", "text");
wrapperFieldsetInput1Text.setAttribute("disabled", "disabled");
wrapperFieldsetInput1.appendChild(wrapperFieldsetInput1Text);
var radioInputFieldset = document.createElement("fieldset");
radioInputFieldset.setAttribute("id", "radio-input");
wrapperFieldset.appendChild(radioInputFieldset);
var radioInputFieldsetUnaltered = document.createElement("div");
radioInputFieldset.appendChild(radioInputFieldsetUnaltered);
var radioInputFieldsetUnalteredInput = document.createElement("input");
radioInputFieldsetUnalteredInput.setAttribute("id", "unaltered");
radioInputFieldsetUnalteredInput.setAttribute("type", "radio");
radioInputFieldsetUnalteredInput.setAttribute("name", "radio");
radioInputFieldsetUnaltered.appendChild(radioInputFieldsetUnalteredInput);
var radioInputFieldsetUnalteredLabel = document.createElement("label");
radioInputFieldsetUnalteredLabel.setAttribute("for", "unaltered");
radioInputFieldsetUnalteredLabel.innerText = "Unaltered";
radioInputFieldsetUnaltered.appendChild(radioInputFieldsetUnalteredLabel);
var radioInputFieldsetMarriedTaxaI = document.createElement("div");
radioInputFieldset.appendChild(radioInputFieldsetMarriedTaxaI);
var radioInputFieldsetMarriedTaxaIInput = document.createElement("input");
radioInputFieldsetMarriedTaxaIInput.setAttribute("id", "marriedTaxaI");
radioInputFieldsetMarriedTaxaIInput.setAttribute("type", "radio");
radioInputFieldsetMarriedTaxaIInput.setAttribute("name", "radio");
radioInputFieldsetMarriedTaxaI.appendChild(radioInputFieldsetMarriedTaxaIInput);
var radioInputFieldsetMarriedTaxaILabel = document.createElement("label");
radioInputFieldsetMarriedTaxaILabel.setAttribute("for", "married-taxa-i");
radioInputFieldsetMarriedTaxaILabel.innerText = "Married taxa I";
radioInputFieldsetMarriedTaxaI.appendChild(radioInputFieldsetMarriedTaxaILabel);
var radioInputFieldsetMarriedTaxaII = document.createElement("div");
radioInputFieldset.appendChild(radioInputFieldsetMarriedTaxaII);
var radioInputFieldsetMarriedTaxaIIInput = document.createElement("input");
radioInputFieldsetMarriedTaxaIIInput.setAttribute("id", "marriedTaxaII");
radioInputFieldsetMarriedTaxaIIInput.setAttribute("type", "radio");
radioInputFieldsetMarriedTaxaIIInput.setAttribute("name", "radio");
radioInputFieldsetMarriedTaxaII.appendChild(radioInputFieldsetMarriedTaxaIIInput);
var radioInputFieldsetMarriedTaxaIILabel = document.createElement("label");
radioInputFieldsetMarriedTaxaIILabel.setAttribute("for", "married-taxa-ii");
radioInputFieldsetMarriedTaxaIILabel.innerText = "Married taxa II";
radioInputFieldsetMarriedTaxaII.appendChild(radioInputFieldsetMarriedTaxaIILabel);
var radioInputFieldsetAllEqual = document.createElement("div");
radioInputFieldset.appendChild(radioInputFieldsetAllEqual);
var radioInputFieldsetAllEqualInput = document.createElement("input");
radioInputFieldsetAllEqualInput.setAttribute("id", "allEqual");
radioInputFieldsetAllEqualInput.setAttribute("type", "radio");
radioInputFieldsetAllEqualInput.setAttribute("name", "radio");
radioInputFieldsetAllEqualInput.checked = true;
radioInputFieldsetAllEqual.appendChild(radioInputFieldsetAllEqualInput);
var radioInputFieldsetAllEqualLabel = document.createElement("label");
radioInputFieldsetAllEqualLabel.setAttribute("for", "all-equal");
radioInputFieldsetAllEqualLabel.innerText = "All equal";
radioInputFieldsetAllEqual.appendChild(radioInputFieldsetAllEqualLabel);
var newDataInput = document.createElement("div");
newDataInput.setAttribute("id", "new-data-input");
wrapperFieldset.appendChild(newDataInput);
var newDataInputInput = document.createElement("input");
newDataInputInput.setAttribute("id", "new-data");
newDataInputInput.setAttribute("name", "new-data");
newDataInputInput.setAttribute("type", "checkbox");
newDataInput.appendChild(newDataInputInput);
var newDataInputLabel = document.createElement("label");
newDataInputLabel.setAttribute("for", "new-data");
newDataInputLabel.innerText = "New Data: Yes or No";
newDataInput.appendChild(newDataInputLabel);
////
var interactionWrapperDiv = document.createElement("div");
interaction.prepend(interactionWrapperDiv);
//
var interactionForm = document.createElement("form");
interactionForm.setAttribute("id", "uploadForm");
interactionForm.setAttribute("action", "http://127.0.0.1:5000/load_tsv_data");
interactionForm.setAttribute("method", "POST");
interactionForm.setAttribute("enctype", "multipart/form-data");
interactionWrapperDiv.appendChild(interactionForm);
//
var interactionFieldset = document.createElement("fieldset");
interactionForm.appendChild(interactionFieldset);
//
var interactionLegend = document.createElement("legend");
interactionLegend.innerText = "UPLOAD YOUR DATA";
interactionFieldset.appendChild(interactionLegend);
//
var interactionFieldsetDiv = document.createElement("div");
interactionFieldset.appendChild(interactionFieldsetDiv);
//
var interactionInput = document.createElement("input");
interactionInput.setAttribute("type", "file");
interactionInput.setAttribute("name", "file");
interactionInput.setAttribute("id", "file");
interactionFieldsetDiv.appendChild(interactionInput);
var interactionSpan = document.createElement("span");
interactionSpan.setAttribute("id", "status");
interactionSpan.setAttribute("class", "material-symbols-outlined");
interactionFieldsetDiv.appendChild(interactionSpan);
//
var interactionFieldsetDiv2 = document.createElement("div");
interactionFieldsetDiv2.style.marginTop = "1vh";
interactionFieldset.appendChild(interactionFieldsetDiv2);
var interactionInput2 = document.createElement("input");
interactionInput2.setAttribute("type", "file");
interactionInput2.setAttribute("name", "fasta-file");
interactionInput2.setAttribute("id", "fasta-file");
interactionInput2.setAttribute("disabled", "disabled");
interactionFieldsetDiv2.appendChild(interactionInput2);
var interactionSpan2 = document.createElement("span");
interactionSpan2.setAttribute("id", "fasta-status");
interactionSpan2.setAttribute("class", "material-symbols-outlined");
interactionFieldsetDiv2.appendChild(interactionSpan2);
var descendantSection = document.createElement("input");
descendantSection.setAttribute("type", "text");
descendantSection.setAttribute("id", "descendant-section");
interaction.prepend(descendantSection);
//////
var marriedDots = document.createElement("div");
marriedDots.setAttribute("id", "married-pattern");
marriedDots.style.top = newContainerParent.offsetTop;
marriedDots.style.left = newContainerParent.offsetLeft;
newContainerParent.prepend(marriedDots);
var contextMenu = document.createElement("div");
contextMenu.setAttribute("id", "context-menu");
newContainerParent.appendChild(contextMenu);
var copyButton = document.createElement("button");
copyButton.setAttribute("id", "copy");
copyButton.innerText = "Copy own seq IDs to clipboard";
contextMenu.appendChild(copyButton);
var copyAllButton = document.createElement("button");
copyAllButton.setAttribute("id", "copy-all");
copyAllButton.innerText = "Copy all seq IDs to clipboard";
contextMenu.appendChild(copyAllButton);
var downloadSeqButton = document.createElement("button");
downloadSeqButton.setAttribute("id", "download-seq");
downloadSeqButton.innerText = "Download own sequences";
contextMenu.appendChild(downloadSeqButton);
var downloadAllSeqButton = document.createElement("button");
downloadAllSeqButton.setAttribute("id", "download-all-seq");
downloadAllSeqButton.innerText = "Download all sequences";
contextMenu.appendChild(downloadAllSeqButton);
var components_js_1 = require("./components.js");
var domContainer = document.querySelector('#plot-container');
var reactRoot = ReactDOM.createRoot(domContainer);
reactRoot.render(React.createElement(components_js_1.PlotDrawing, { lineages: predefinedObjects_js_1.ln, ranks: predefinedObjects_js_1.lr }));
var plotContainerParent = domContainer.parentElement;

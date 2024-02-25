for (let i = 0; i < 3; i++) {
    let style = null;
    let illustration = null;
    if (i === 1) style = 'black';
    if (i === 2) illustration = '/assets/images/map.svg';
    
    let uptitle = '17' + ' Mai';
    let headlineLabel = 'Headlin Beitrag 2021';
    let tagClass = (i < 2) ? 'h5' : 'h3';
    let subtitle = 'Subtitle';
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    
    let teaserHTML = generateComponentTeaser({
        style: style,
        illustration: illustration,
        uptitle: uptitle,
        headline: {
            label: headlineLabel,
            tag: 'h2',
            tagClass: tagClass
        },
        subtitle: subtitle,
        text: text
    });
    
    document.getElementById('generateComponentTeaser').innerHTML += teaserHTML;
    console.log(teaserHTML);
}

function generateComponentTeaser(data) {
    let headlineTag = `<${data.headline.tag} class="${data.headline.tagClass}">${data.headline.label}</${data.headline.tag}>`;
    let illustrationTag = data.illustration ? `<img class="teaser__illustration" src="${data.illustration}" alt="Illustration">` : '';
    
    return `
        <div class="teaser" style="background-color: ${data.style}">
            ${illustrationTag}
            <div class="teaser-content">
                <div class="teaser__headline">${data.uptitle}</div>
                ${headlineTag}
                <div class="teaser__subtitle label">${data.subtitle}</div>
                <div class="teaser__text copy">${data.text}</div>
            </div>
        </div>
    `;
}




let typing = document.getElementById('typing');
let noCol = document.getElementById('noCol');
// let bold = document.getElementById('bold');
// console.log(typing);
// console.log(typing.innerHTML);

function bold(boldBtn) {
    if (typing.style.fontWeight === 'bold') {
        typing.style.fontWeight = 'normal';
    }  else {
        typing.style.fontWeight = 'bold';
    }
}

function italic(italicBtn) {
    if (typing.style.fontStyle === 'italic') {
        typing.style.fontStyle = 'normal'
    } else {
        typing.style.fontStyle = 'italic';
    }
}

function underline(underlineBtn) {
    if (typing.style.textDecoration === 'underline') {
        typing.style.textDecoration = 'none';
    } else {
        typing.style.textDecoration = 'underline';
    }
}

function right(rightBtn) {
    if (typing.style.textAlign === 'right') {
        typing.style.textAlign = 'left';
    } else {
        typing.style.textAlign = 'right';
    }
}

function center(centerBtn) {
    if (typing.style.textAlign === 'center') {
        typing.style.textAlign = 'left';
    } else {
        typing.style.textAlign = 'center';
    }
}

function justify(justifyBtn) {
    if (typing.style.textAlign === 'justify') {
        typing.style.textAlign = 'left';
    } else {
        typing.style.textAlign = 'justify';
    }
}

function left(leftBtn) {
        typing.style.textAlign = 'left'
}

// function color(btn) {
//     let a = btn.classList.item(1);
//     console.log(a);
//     // typing.classList.add(a);
//     if (typing.hasAttribute('class')) {
//         // typing.style.background = '#fff';
//         // typing.classList.remove(a);
//         if (typing.className === a) {
//             typing.removeAttribute('class');
//             noCol.removeAttribute('class');
//         }
//         else if (typing.className !== a) {
//             typing.removeAttribute('class');
//             typing.classList.add(a);
//             noCol.removeAttribute('class');
//             noCol.classList.add(a);
//         }
//     } 
//     else {
//         typing.classList.add(a);
//         noCol.classList.add(a);
//     }
// }

// function noColor(colorBtn) {
//     typing.removeAttribute('class');
//     colorBtn.removeAttribute('class')
// }


function color(btn) {
    let a = btn.classList.item(1);
    console.log(a);
    // typing.classList.add(a);
    if (typing.hasAttribute('class')) {
        // typing.style.background = '#fff';
        // typing.classList.remove(a);
        if (typing.className === a) {
            typing.removeAttribute('class');
            noCol.removeAttribute('class');
        }
        else if (typing.className !== a) {
            typing.removeAttribute('class');
            typing.classList.add(a);
            noCol.removeAttribute('class');
            noCol.classList.add(a);
        }
    } 
    else {
        typing.classList.add(a);
        noCol.classList.add(a);
    }
}

function noColor(colorBtn) {
    typing.removeAttribute('class');
    colorBtn.removeAttribute('class')
}

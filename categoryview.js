function categories() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Kategorier </h1>

    <br><button onclick="showUnderAction()"> Action </button>
    <br><br><button onclick="showUnderKomedie()"> Komedie </button>
    <br><br><button onclick="showUnderRomantikk()"> Romantikk </button>
    <br><br><button onclick="showUnderSkrekk()"> Skrekk </button>
    <br><br><button onclick="showUnderScifi()"> Scifi </button>
    <br><br><button onclick="showUnderKrim()"> Krim </button>
    <br><br><button onclick="showUnderThriller()"> Thriller </button>
    <br><br><button onclick="showUnderDrama()"> Drama </button>
    <br><br><button onclick="showUnderFantasy()"> Fantasy </button>
    <br><br><button onclick="showUnderDokumentar()"> Dokumentar </button>

    </center>
    `;
    appDiv.innerHTML = html;
}
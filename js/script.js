// Fase di preparazione

const app = Vue.createApp({
    name: "Vue Slider",
    data: () => ({
        currentSrc: 0,
        imgsList: [
            {
                img: "../img/img01.jpg",
                title: "Marvel's Spiderman Miles Morale",
                txt: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
            },

            {
                img: "../img/img02.jpg",
                title: "Ratchet & Clank: Rift Apart",
                txt: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
            },

            {
                img: "../img/img03.jpg",
                title: "Fortnite",
                txt: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
            },

            {
                img: "../img/img04.jpg",
                title: "Stray",
                txt: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city"
            },

            {
                img: "../img/img05.jpg",
                title: "Marvel's Avengers",
                txt: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
            }
        ]
    }),
    methods: {
        setCurrentSrc(newSrc) {
            switch (newSrc) {
                case "prev":
                    return this.currentSrc === 0 ? this.currentSrc = this.imgsList.length - 1 : this.currentSrc--;
                    break;
                case "next":
                    return this.currentSrc === this.imgsList.length - 1 ? this.currentSrc = 0 : this.currentSrc++;
                    break;
                default:
                    return this.currentSrc = newSrc;
            }
        }
    }
});

app.mount("#app");
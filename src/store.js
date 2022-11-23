import { reactive } from 'vue'
export const store = reactive({
    menu: [
        {
            a: 'home',
            link: '#',
        },
        {
            a: 'meet the band',
            link: '#',
        },
        {
            a: 'live dates',
            link: '#',
        },
        {
            a: 'latest news',
            link: '#',
        },
        {
            a: 'albums',
            link: '#',
        },
        {
            a: 'fans',
            link: '#',
        },
    ],
    maps: [
        {
            title: '17/08/2020 gem festival 2020 anakalia, georgia',
            image: 'anaklia.jpeg',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
            link: 'https://www.google.it/maps/place/Anaklia,+Georgia/@42.3960143,41.5766428,14z/data=!3m1!4b1!4m5!3m4!1s0x405dd3503d5ccb83:0xe6594e70d69782bc!8m2!3d42.4003008!4d41.5816605'
        },
        {
            title: '24/09/2020 groovfest dominical republic',
            image: 'repdom.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
            link: 'https://www.google.com/maps/place/Repubblica+Dominicana/data=!4m2!3m1!1s0x8eaf8838def1b6f5:0xa6020f24060df7e0?sa=X&ved=2ahUKEwjLlYKmsMT7AhUYEcAKHZRcCmYQ8gF6BQiEARAB'
        },
        {
            title: '31/10/2020 oasis festival 2020 marrakech, morocco',
            image: 'marrakech.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
            link: 'https://www.google.com/maps/place/Marrakech,+Marocco/data=!4m2!3m1!1s0xdafee8d96179e51:0x5950b6534f87adb8?sa=X&ved=2ahUKEwj5w-C1sMT7AhV0gP0HHeUFDVoQ8gF6BQiGARAB'
        },
        {
            title: '07/11/2020 moga festival - essaquiria, morocco',
            image: 'essaouira.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
            link: 'https://www.google.com/maps/place/Provincia+di+Essaouira,+Marocco/data=!4m2!3m1!1s0xdad9a4e9f588ccf:0x57421a176d5d7d30?sa=X&ved=2ahUKEwiPttLAsMT7AhUGXsAKHR20Ad8Q8gF6BQiEARAB'
        },
        {
            title: '10/12/2020 enivision - uvita, costa rica',
            image: 'uvita.png',
            underTitle: 'Untold Stories',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde eius labore veniam, beatae voluptas quasi perferendis consectetur eaque excepturi similique! Asperiores, doloribus accusamus ullam quisquam sequi tempora quod voluptate laborum, odio, iste rerum quibusdam.',
            button: 'book now',
            itemVisible: false,
            link: 'https://www.google.com/maps/place/Provincia+di+Puntarenas,+Uvita,+Costa+Rica/data=!4m2!3m1!1s0x8fa15797d4474891:0x39ea10029c9e9f27?sa=X&ved=2ahUKEwjYh7jMsMT7AhVqgf0HHXfgDVsQ8gF6BAhNEAE'
        },
    ],
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    },
    isAudioVisible: false,
    isVisible: false,
    dropdown() {
        this.isVisible = !this.isVisible
    },
    viewMap(index) {
        store.maps[index].itemVisible = !store.maps[index].itemVisible
    },
    audioPlay() {
        this.isAudioVisible = !this.isAudioVisible
    }


})
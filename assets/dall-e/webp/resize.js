const easyimage = require('easyimage')

async function lol(){
    for(const file of fileNames){
        try {
            const imageInfo = await easyimage.resize({
                src: `./${file}`,
                width: 200,
                height: 200,
                dst: `./low/${file}`
            });
            console.log(imageInfo);
        } catch (e) {
            console.log("Error: ", e);
        }
    }
}


const fileNames = [
    "0_gorilla_face_close-up.webp",
    "1_gorilla_face_close-up.webp",
    "2_gorilla_face_close-up.webp",
    "3_gorilla_face_close-up.webp",
    "4_crab-eating_macaque_face_close-up.webp",
    "5_crab-eating_macaque_face_close-up.webp",
    "6_crab-eating_macaque_face_close-up.webp",
    "7_crab-eating_macaque_face_close-up.webp",
    "8_crab-eating_macaque_face_close-up.webp",
    "9_crab-eating_macaque_face_close-up.webp",
    "10_crab-eating_macaque_face_close-up.webp",
    "11_crab-eating_macaque_face_close-up.webp",
    "12_mandrill_face_close-up.webp",
    "13_red-eared_guenon_face_close-up.webp",
    "14_red-eared_guenon_face_close-up.webp",
    "15_red-eared_guenon_face_close-up.webp",
    "16_red-eared_guenon_face_close-up.webp",
    "17_red-shanked_douc_face_close-up.webp",
    "18_red-shanked_douc_face_close-up.webp",
    "19_red-shanked_douc_face_close-up.webp",
    "20_japanese_macaque_face_close-up.webp",
    "21_japanese_macaque_face_close-up.webp",
    "22_japanese_macaque_face_close-up.webp",
    "23_japanese_macaque_face_close-up.webp",
    "24_de_brazza's_monkey_face_close-up.webp",
    "25_de_brazza's_monkey_face_close-up.webp",
    "26_de_brazza's_monkey_face_close-up.webp",
    "27_de_brazza's_monkey_face_close-up.webp",
    "28_golden_snob-nosed_monkey_face_close-up.webp",
    "29_golden_snob-nosed_monkey_face_close-up.webp",
    "30_golden_snob-nosed_monkey_face_close-up.webp",
    "31_golden_snob-nosed_monkey_face_close-up.webp",
    "32_baboon_face_close-up.webp",
    "33_baboon_face_close-up.webp",
    "34_baboon_face_close-up.webp",
    "35_baboon_face_close-up.webp",
    "36_gibbon_face_close-up.webp",
    "37_baboon_face_close-up.webp",
    "38_baboon_face_close-up.webp",
    "39_baboon_face_close-up.webp",
    "40_baboon_face_close-up.webp"
  ]

  lol()
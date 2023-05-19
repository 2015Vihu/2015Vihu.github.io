'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f34bd9b5703d7f5aff2f16a6a9ce95ae",
"/": "f34bd9b5703d7f5aff2f16a6a9ce95ae",
"manifest.json": "a8c71255f5066a25a56337b66119b912",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "d461ed098ada2cd30faa422aa82471ea",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/FontManifest.json": "8f58da668d32d724b28bb5e8000dcdc8",
"assets/NOTICES": "0ffd0142c62123ba382a180978a45cbc",
"assets/assets/images/training.png": "9eadad1c362c570467db4cae99f962b4",
"assets/assets/images/group.png": "1a3ba78cb10cd986d4bdc7eb91b2a9da",
"assets/assets/images/BRACKET_OF_THREE.png": "aea9b58f9cd459aa4eda661508ea8484",
"assets/assets/images/BRACKET_OF_EIGHT.png": "a61112b68732596d21ebe289ce5723ca",
"assets/assets/images/club_logo.png": "22b586ac12a9713334e65dad24762fab",
"assets/assets/images/official_game.png": "e3f2f544fd4ab54c9fe50f24acc0cfa3",
"assets/assets/images/friendly.png": "1bcb1a4b72204b595b0a6f128c24d437",
"assets/assets/images/referee.png": "6666f425670be61f1e05801388ecab60",
"assets/assets/images/player_demo.png": "a5b134ae6e24e1d3ef719ab344e16a5c",
"assets/assets/images/user_image.png": "93efbc4053505ac4b9cf52230701b2ab",
"assets/assets/images/brecketView.png": "63526e3d3af7c425f2a5df1aa514187a",
"assets/assets/images/demo_boy.png": "91712bf7868a4af13bcee31213747a8a",
"assets/assets/images/ellipse.png": "a96937f69fde6ad803c3c89557302470",
"assets/assets/images/onboarding.png": "7d84936249a78640bbcae4ac5d11db9e",
"assets/assets/images/practice.png": "01f1ced445e50044e57ba2c4884e0331",
"assets/assets/images/card_bg2.png": "9ec1323a9daa7c16ac0e5f4e2c60c0ce",
"assets/assets/images/card_bg_trans.png": "9e126e161ec52cab975872d2a19a49a2",
"assets/assets/images/logo2.png": "80838a7b77b6e492ba0ab20da4aaffb5",
"assets/assets/images/card_bg_green_line.png": "7dfbb51f8ad67c1c0bf6e3435c49da8f",
"assets/assets/images/popbg.png": "db27ee70f33112275041263eb2ada4c7",
"assets/assets/images/team_a.png": "d476dc3f36eb458780042ccdfac17df8",
"assets/assets/images/applogo.png": "5730a3020c6e0637bd695499a8f3b06c",
"assets/assets/images/richard_johnson.png": "d821627ecabd24328753183a750730cb",
"assets/assets/images/pencil_custom.png": "b6824402c50a77c0cfa492f81462ab14",
"assets/assets/images/event.png": "5c9acdda3fc42d1b5fd411a6d75ae443",
"assets/assets/images/gallery_image.png": "24ebe5ee06a5f7d8b8b0c56c19b0f62f",
"assets/assets/images/team_b.png": "e69aaec4b88a54e6c76a91dceb0a1af2",
"assets/assets/images/player_image.png": "495277d6383d2ea71cab0fd9888fced7",
"assets/assets/images/jessica.png": "cd07655bc58a745b697f6bbd70df84ce",
"assets/assets/images/card_bg1.png": "1b019a98a573db6caf16c2752621c6b0",
"assets/assets/images/male.png": "043df91476a26b167ac5da6c13efc0c2",
"assets/assets/images/eye_icon.png": "f182c973304349c011023f572f95aef3",
"assets/assets/images/card_bg.png": "d243e9ec14df3bde406860a48acbff85",
"assets/assets/images/U11_AND_OLDER.png": "edf064b58e8fa53427eafb1635747602",
"assets/assets/images/female.png": "a4512ac30d1b6416796c54d679a58b87",
"assets/assets/images/BRACKET_OF_FIVE.png": "577f30d7e631ae36db36ef3b61a64408",
"assets/assets/images/splash_bg.png": "f00161583bb90c865f728befd71de58f",
"assets/assets/images/BRACKET_OF_FOUR.png": "341cb1b3a9a90efc43ec9f6ba1a79da3",
"assets/assets/images/richard_wright.png": "a953001525f5840d970f133f546cec7c",
"assets/assets/images/map_image.png": "b3f6de4d7584b89f7e0e09cb9ae4ac5d",
"assets/assets/images/dummy_player.png": "fd1c156410c67fd3fdf3fde870b8bb11",
"assets/assets/images/football_club_image.png": "cf43d8a7752e9c282ce954b108ed0be4",
"assets/assets/images/meeting.png": "b1ca6b3b9fde4056a6d3c0e3083645e3",
"assets/assets/lang.json": "71d216ccf8a26e5cf4d134ce82a1fc39",
"assets/assets/teamsNew.json": "9358ce1f871824a747398b5e95f95eca",
"assets/assets/fonts/montserrat_regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/redHatDisplay_regular.ttf": "29c5bd30c6bc91b9a9d161db80a0a4de",
"assets/assets/fonts/alumniSans-regular.ttf": "4e71a3d3b9b33d8f2befe7fdd157ca05",
"assets/assets/fonts/montserrat_semiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/gilroy_light.ttf": "25e5ce9784cf3324af89cfd13fa59517",
"assets/assets/fonts/alumniSans_semiBold.ttf": "475951b436082f47287671d64b6ce73a",
"assets/assets/fonts/dm_sans_bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/dm_sans_medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMMono_Regular.ttf": "c6d78233d13e36d83688ac5e6ee0927a",
"assets/assets/fonts/gilroy_medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/fonts/dm_sans_regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/teams.json": "1b52c99314368cc2f66a5d14137603e1",
"assets/assets/icon/icon_blue_up_arrow.svg": "382253f3a0361dc49bd1de0a5f9c4822",
"assets/assets/icon/statistic.png": "9fc037238c4eebbf7e922e11b94903c1",
"assets/assets/icon/edit_pencile.png": "f74035a7cd16f3fd38848b8663134ca5",
"assets/assets/icon/football.png": "0d317e96fb27a72bb446dfc5d8c7b3d6",
"assets/assets/icon/no_game.png": "1211cbd39a7c245c55cc3e385e817945",
"assets/assets/icon/right_arrow_assign.png": "403d9adae32337a4a1202bbdaad585a6",
"assets/assets/icon/icon_9_blue_corner.svg": "8d9fe11ee090329db78a754b7e14b6b5",
"assets/assets/icon/icon_white_add_picture.svg": "28732628a8e2b7b865dc4236a17ada75",
"assets/assets/icon/football.gif": "03c563628588b8a1d44a731ff58b221b",
"assets/assets/icon/position_icon.png": "6daf0017424b72b40ecf82881e1175ac",
"assets/assets/icon/profile.png": "653140bd3ef374712bafe140516bbb65",
"assets/assets/icon/icon_football.png": "6ca679ea8b0bf3c0d6949dec0c0e8732",
"assets/assets/icon/no_team_green_black.png": "1df6524d9d17c66ded30e2e31c42f902",
"assets/assets/icon/account.png": "88deba12c51a842795ee2d2fde059523",
"assets/assets/icon/cross_circle_icon2.png": "862a6175c2339b4d1b32d9b3f08aead1",
"assets/assets/icon/doc.png": "2ee554f60e1168bec36c4c327e1f67a8",
"assets/assets/icon/icon_dark_blue_add_user.svg": "13e2c9fb17abdf7726201e25871db504",
"assets/assets/icon/forward.png": "21547374f4191ad4dbc54a3cf3b149b3",
"assets/assets/icon/add_icon.png": "6e46a7dbd6f8003e685b35fd46d924fe",
"assets/assets/icon/cross_circle_icon.png": "0f0864d9c66c811a62e2a8a73bf3b9f7",
"assets/assets/icon/up_arrow.png": "8f0dc17ff6bb6613d57ac2f23ea06470",
"assets/assets/icon/translate.png": "e0f42829b13a793efc0da0a9a33a7841",
"assets/assets/icon/green_line.png": "23a72d626ff3d839c697cdea5ad56215",
"assets/assets/icon/icon_6_g_k_save.svg": "9bc1c556e82e644ca18b3a331a181238",
"assets/assets/icon/icon_8_blue_off_side.svg": "e63aca0cc966ec7aa92b4e26b3387ba7",
"assets/assets/icon/funnel.png": "340bb887d60112660dbf4938f6e8725d",
"assets/assets/icon/icon_red_delete.svg": "4b6c3805f5f32d3128bdac020a66a005",
"assets/assets/icon/uncheck.png": "a9b0144e6b1d013b3045801fd18a25d3",
"assets/assets/icon/right_icon.png": "9f53dfb801df1ea0a064eaf0ffe9c7eb",
"assets/assets/icon/icon_4_red_card.svg": "1f95263bca04ed23fdbcbcbb2cc4bd08",
"assets/assets/icon/run_report.png": "4d43a754e949bacf75462c257e58827d",
"assets/assets/icon/icon_primary_color_search.svg": "6f831dcfb63511e7a079d9a32e94cccc",
"assets/assets/icon/bell.png": "fe7a356b8b73de02c84cdce172861b40",
"assets/assets/icon/no_league.png": "35634f228132a3d9f4e0e5dfa1b89286",
"assets/assets/icon/play_ground.svg": "e05bd3a9dde67a4d4f8a52bb18c91e83",
"assets/assets/icon/icon_10_blue_penalty_kicks.svg": "d0b146e819ac857985271b6db662f3cf",
"assets/assets/icon/three_dot.png": "bdb0386091b7c9198ac637212a36230a",
"assets/assets/icon/icon_primary_color_notification.svg": "8e453e778d17aa236d8bb32eec8dba82",
"assets/assets/icon/corners.png": "7e2bdd35ed7f8f85e272a7c538677919",
"assets/assets/icon/calendar.png": "c3405923d75586749a54b0765d8eeea9",
"assets/assets/icon/info_circle.svg": "f642a8111858329018292a63fbacf1ce",
"assets/assets/icon/app_logo_green.png": "2df4cb5cd4ef6dfbcd8ea840ad57b8d9",
"assets/assets/icon/cross_icon.png": "73a9ccc24c77b712f88583b2909a8805",
"assets/assets/icon/competition_cup_icon.png": "4e4fb0942d3c2c52813ad6e0d5127d25",
"assets/assets/icon/icon_primary_color_app_logo.svg": "a12b181039961543f441f6d4d498c5bc",
"assets/assets/icon/offside.png": "d145379de7760e9ae7ee15c9d17cebcc",
"assets/assets/icon/Vectorimg.svg": "ec23b879464cdc1c8d824b593127ae1b",
"assets/assets/icon/right.png": "4c23c36a66cd17f0a595c5e056fa45b9",
"assets/assets/icon/remove.png": "65c1a4786896b2770f3a6db0bb66d00a",
"assets/assets/icon/club_placeholder.png": "5c85de75848773add50aee325b3ffd51",
"assets/assets/icon/contactUs.png": "192f6f56ffd9f407671d1a7e016a70d0",
"assets/assets/icon/leftRight.png": "20d21e26331f89a7af1920ba81620cab",
"assets/assets/icon/icon_grey_right_arrow.svg": "ef5fc09f6aa1383bb533ea79b8c5ec84",
"assets/assets/icon/home1.png": "b651da92380423188d578c5cd2bd6d72",
"assets/assets/icon/clock_icon.svg": "5801d958aeeb6b9482b9f791b817a111",
"assets/assets/icon/lab_icon.svg": "273f91278ecfa96121999a07329c9cea",
"assets/assets/icon/nodatafound_logo.png": "9630731a8f8c199d7ccef84ef4f77a85",
"assets/assets/icon/informationcircle.png": "9d568d8fca5798d468a5b475d77331d3",
"assets/assets/icon/icon_yellow_card.png": "09392c1bd5fc1ca8775b7912fae97d24",
"assets/assets/icon/bellGb.png": "9b85b44b7123310fcd93f8e7253c1c8b",
"assets/assets/icon/profile1.png": "6fe025becedf95e2b9de5528c34b16cb",
"assets/assets/icon/game_summery_back.png": "14515853025a88b980df11068f0b8217",
"assets/assets/icon/header_logo.png": "1d9e4274d84307c68716d6e10c0d66ed",
"assets/assets/icon/invite_competition.svg": "6d39b67dd5178f9d8026b9b0ba5f2b75",
"assets/assets/icon/icon_blue_drop_down.svg": "d2d711f135a9a6d4960a03f6620af5ad",
"assets/assets/icon/reccuring.png": "8d4bdc41b14b08ee5810b49ce55010f3",
"assets/assets/icon/headerArrow.png": "cfffaf89ed2a4059b73fa5fdcab3fcd8",
"assets/assets/icon/number_shirt_icon.png": "ba27d474dba0cc50ecea47a5a64f1ee3",
"assets/assets/icon/greyIcon.png": "3273f574aaecb804a54584448aa1440e",
"assets/assets/icon/matches_icon.png": "54b56b1aa96102436127ef9dddfb398a",
"assets/assets/icon/clock.png": "8d673cbfdda5606a7786a0464a57192c",
"assets/assets/icon/role_indicator.png": "4a0d5ea4ca00f5cb66adeaa2eeb275d2",
"assets/assets/icon/foot.png": "dfb0bc2e9f05cde32e12e59becd8e2bd",
"assets/assets/icon/ellipse.png": "9651074d30481cb69ab53d0c1b9eeac7",
"assets/assets/icon/search_white_icon.png": "44c9cf683a73061cadc5113b835514d3",
"assets/assets/icon/tour_bracket16.png": "d7a8d93205e5fb6c3c95fbecb0313e65",
"assets/assets/icon/not_going.png": "d4d0afd9f0fc76ba045ea5116dbf87fd",
"assets/assets/icon/add_button_green.png": "6da790523de7e0c9ff65e93aa7ec4b98",
"assets/assets/icon/unhide.png": "54e9bba679bcfc0fe082d196f4bb46d6",
"assets/assets/icon/locationicon.svg": "9dec2484e139ef28536b09be24d04be6",
"assets/assets/icon/uncheckbox.png": "cf5ed7478c94d95a46a0e336c419ab39",
"assets/assets/icon/add.png": "123eb92e1afa24bccf2ec1f65cb9a720",
"assets/assets/icon/total_task_claim.png": "b9b1d7457a5b1e9d6c54ef6dd71d5993",
"assets/assets/icon/icon_drak_blue_location.svg": "b45229c2a89e0c0fa61915a8763629a8",
"assets/assets/icon/icon_1_blue_goal.svg": "e7e0a9d9ef7a43e010a080925e59b6de",
"assets/assets/icon/icon_grey_no_upcoming.svg": "dc7e807fdb61add1244dc8404694e70e",
"assets/assets/icon/icon_grey_no_team.svg": "d8994582305d979810630c1880adcbd9",
"assets/assets/icon/icon_drak_blue_calender.svg": "31d2ca2ee4fa3740fd76b988afdd8a04",
"assets/assets/icon/right_arrow.png": "942887af181b4f3f5258371f2ea830da",
"assets/assets/icon/flag.png": "f4d43602ae51e7f2381f0ca97d5f3b41",
"assets/assets/icon/cross_red_circle.svg": "f587a9f9a6eac7ce6ea247c0ffbd9d1b",
"assets/assets/icon/no_league.svg": "2932e0cdc5cba125e427834b0f875e9c",
"assets/assets/icon/group_report_box.svg": "8b28a2b589e13a02c0e1228dd501acb6",
"assets/assets/icon/icon_5_blue_foul.svg": "225ffb346da969a21cb5c7ffe4ba65b0",
"assets/assets/icon/no_standing.png": "87fb0584ddb793b907ed392ec214de79",
"assets/assets/icon/filter.png": "e17cceae1e275377fe9c5972909659fd",
"assets/assets/icon/going.png": "c3a29f9c9574e56eeec5931f77d706eb",
"assets/assets/icon/iconFootballWhite.png": "38e6f3b6e013ff88f86740ddfd1cf7d9",
"assets/assets/icon/editIconBlack.png": "d0c19e8c617fcf32f16aa16b2f3cb6a2",
"assets/assets/icon/add_link.png": "6760bc102ace1fb812a7a603fea6fe66",
"assets/assets/icon/place_holder.svg": "248b11b673a3f4332b6def076a81c0ad",
"assets/assets/icon/plus_button_icon.svg": "41a574afc68306518a18e5d9586812bd",
"assets/assets/icon/both.png": "08d7bb9db8ef493feda7f11c24c34997",
"assets/assets/icon/invite.png": "663a0d6a2fa26d25ffa69c958ce24f45",
"assets/assets/icon/no_player_added.png": "ac697379ecc24bdf4f7c0f06d052f4ad",
"assets/assets/icon/info_icon_dark_blue.png": "8bc713ce47e0ca71c6ac6a2112246a5d",
"assets/assets/icon/icon_grey_add.svg": "e7f68e5d6b3308e5eeee2c2d638c3437",
"assets/assets/icon/info_icon.png": "11d7c5cc194de1acf6f24a05642f0449",
"assets/assets/icon/icon_3_yellow_card.svg": "34b28338feca7c8554d8ea135c78db8b",
"assets/assets/icon/icon_blue_filter.svg": "188e15210060f07f18e08da0a377aa92",
"assets/assets/icon/icon_7_shot_on_goal.svg": "a215e96d8c90a1a97f2ba3c76a691f61",
"assets/assets/icon/icon_red_circle_remove.svg": "ee543ef2f43d91c8b7311c141a9b9949",
"assets/assets/icon/user_rounded_logo.svg": "977e4afa31c35fbf3f55bdd0571692db",
"assets/assets/icon/assistant_referee.png": "2e2da995dc72c5512d25bfa67a2e93fb",
"assets/assets/icon/ic_change_pass.png": "a0b93103ce9bebf773b8f9304fb13602",
"assets/assets/icon/question_mark.png": "53a6b75c6a377e9dfe840d0a4f7147f4",
"assets/assets/icon/icon_blue_arrow_down.svg": "78e86ede3234e59155f756f0d325e374",
"assets/assets/icon/total_game_vol.png": "9e197c4fb307bd451b02fa91b673c3e4",
"assets/assets/icon/icon_grey_search.svg": "cb31347387ff2a891f888b57a1ea4102",
"assets/assets/icon/remove_circle.png": "f88f3d1ad48b96c4c92394a929e81831",
"assets/assets/icon/icon_up_arrow.svg": "0a8f7cc6f903b49290d1b500e3f2166d",
"assets/assets/icon/no_data.png": "4a4ac8f006b0098f291da6cef7be8e96",
"assets/assets/icon/referee_back.png": "0fe6149b9fcfe5ccab2e6c3deecd2575",
"assets/assets/icon/player_icon.png": "476882ba2d55a4158df9e602c68b544e",
"assets/assets/icon/circle_cross_icon.png": "6cbf32554ef37abb492ea06a0075bf51",
"assets/assets/icon/no_response.png": "48506b53d2b6d74a5c30e8345fdc1378",
"assets/assets/icon/goalKeeper.png": "73a10b6bc826f361dcc861e5765d279a",
"assets/assets/icon/icon_primary_color_football.svg": "b99d6512744ac9adac5a7aa311dea7a1",
"assets/assets/icon/boll_icon.svg": "a2b8dfb596fc998d12fec5ea575c8ebf",
"assets/assets/icon/homeheaderbg.svg": "cb4c59d9c395977161f5c9fcff27c55a",
"assets/assets/icon/account_delete.png": "e36aab0f3bd5aa6cc4c7529dd75757b4",
"assets/assets/icon/lock_icon.png": "fb23ba90ab207270d26946fb1a4ab1c2",
"assets/assets/icon/right_arrow_comp.svg": "4e9d8ab1ecd01275b0461609a094f77c",
"assets/assets/icon/center.png": "d3072ed49b2cd68853a2744a5137dc81",
"assets/assets/icon/user6.png": "b6e4671122ffb4badc0f75c3d680339e",
"assets/assets/icon/defender.png": "9593af36c6c3d240338aea611d43f06a",
"assets/assets/icon/logout.png": "e6e2cd7582b2db009cf0cb7ab2abbdb3",
"assets/assets/icon/marker.png": "5340d1dcfaee5dc9f3f740dcd1f26a42",
"assets/assets/icon/cup.svg": "1cf309c52f621c66ec9798b45f775ed9",
"assets/assets/icon/foul.png": "1c24871ec4e0ca835cbd52a147b6aa87",
"assets/assets/icon/hyperlink.png": "527cccb90c525afff3403be9f2fd87a8",
"assets/assets/icon/minus.png": "a397708a8b5c29d81387ba36c8693bad",
"assets/assets/icon/gksaves.png": "92a9b76caefc4136039ca56a21916e91",
"assets/assets/icon/nwsl.png": "f3658127b3e137752ee14ec157cfc92e",
"assets/assets/icon/hide.png": "9dccf3904018b17f1540c498cf25fdfc",
"assets/assets/icon/icon_blue_left.svg": "3fbc173c6de00bb8478ed233bc6567ae",
"assets/assets/icon/Editpansil.png": "c4fa75b9a9a73a732f6cd9244a1ff14e",
"assets/assets/icon/icon_blue_right_arrow.svg": "cba935a2165b75b65d5d60222befd156",
"assets/assets/icon/league_bottom.png": "38558f32b5abf084c1e6584e39dbcc21",
"assets/assets/icon/right_circle_icon.svg": "bf8d4f20e540f363f256d7c3a2c5cbe9",
"assets/assets/icon/add_green_icon.png": "bd5fdab3548df8d4a3f5014137b94ce7",
"assets/assets/icon/game_stats_icons.svg": "19700f4cb282868fac6d5bce6ed54934",
"assets/assets/icon/mdi_cancel.png": "51d27e0d33decbecf271b07353dd1184",
"assets/assets/icon/place_holder_rounded_logo.svg": "1bebf2927210a88630e35d0dfe7b1570",
"assets/assets/icon/team_icon.svg": "356eb87b7a5153e27df1f04579bc8423",
"assets/assets/icon/remove_cross.png": "4be5c03a73e0a01cab89e81c78758a5b",
"assets/assets/icon/icon_drak_blue_add.svg": "a49c1e28c307487e7318481b47792f8c",
"assets/assets/icon/no_upcoming.png": "29f99a99f9f11194f0e04710a7e86503",
"assets/assets/icon/no_club.png": "5a67955707e3eae65136bf110be1ae75",
"assets/assets/icon/icon_substract.png": "9bc55df3a7f86240a5fe4e55021489fb",
"assets/assets/icon/icon_red_close.svg": "63a5868f22179181b249abe4d038d088",
"assets/assets/icon/icon_primary_color_setting.svg": "2aed76aa918c8c816667cf63c3b00e57",
"assets/assets/icon/center_referee.png": "2c78f8a033ea142d9b05742fdb41992d",
"assets/assets/icon/ac_delete.png": "9f5898dd1a0c4d3a5350c5992df27ab4",
"assets/assets/icon/shotOnTrget.png": "75831738a0bf5f5d6066270a0fae7212",
"assets/assets/icon/icon_red_card.png": "50feccdcb6b6c8993b2c17e7f641e3fc",
"assets/assets/icon/offsides.png": "be36cbef2ca255bde8555e748e28a848",
"assets/assets/icon/right_green_circle.svg": "5350d72345474db2405f632c16cbd583",
"assets/assets/icon/trophy.png": "add73943b66965b726917294c48e05d2",
"assets/assets/icon/icon_primary_color_yellow_card.svg": "c0dbab9a9b5202092119818917300e69",
"assets/assets/icon/calendar_icon.svg": "653da6e20407c9dd5c6b79d297842664",
"assets/assets/icon/sync_cal.png": "d904516ccb8777f702d57e88c8136aa6",
"assets/assets/icon/upload.png": "bed68ca36d7a8d3156dde7c9b24196df",
"assets/assets/icon/message.png": "39a92e62deb5ea7204d6a5729b17f2cd",
"assets/assets/icon/location.png": "c002fe905c0886388b970bcb23ac7a8d",
"assets/assets/icon/settings.png": "58a48b0203520d254ecc2d07bf6c6522",
"assets/assets/icon/info_icon_gray.png": "aae20e40a2ebef6433efb8a8444de3e9",
"assets/assets/icon/icon_0_blue_match.svg": "4b0ce8a41a59fc5623af696efa0c5de1",
"assets/assets/icon/ic_switch_role.png": "047ad9535615c2273f1f1a797062a940",
"assets/assets/icon/add_picture.png": "6993a5fdf678b785d3218ca30decbfe4",
"assets/assets/icon/calender_bg.png": "9eb326a5f5981c11db75366c9ebb511f",
"assets/assets/icon/assist.png": "b223e3d037b2fdf5025b38d7c23d92c8",
"assets/assets/icon/icon_red_remove.svg": "dc25c975dd539eae05bc7c82ad7a99cb",
"assets/assets/icon/delete.png": "fc33d08bb386591931385f95ba2bfe2f",
"assets/assets/icon/icon_2_blue_assist.svg": "9612817f984b66f1b3a8ea9956661a3b",
"assets/assets/icon/messages_icon.svg": "c4d7b317b1ea6cbb9c791d6ec946b3e7",
"assets/assets/icon/ic_share.png": "ac51482efcb85431dc0b26c3984c28e4",
"assets/assets/icon/board.png": "398488f8170d671879580c9aa87a2df2",
"assets/assets/icon/game_stats_icon.png": "ef527d334e9477b766316941245d7817",
"assets/assets/icon/globe.png": "8c7054f445830d64d8e11d298115d40b",
"assets/assets/icon/appbar_back_icon.png": "d61d17d67d5af71c97ae97d0a1d51dca",
"assets/assets/icon/checkbox.png": "fd6a63b08d6b2a9fe62967cd9012ab9b",
"assets/assets/icon/ofside_flag.png": "5ac580fa46d5615065933b3f4300695d",
"assets/assets/icon/filter_new.png": "4ad17313dd2e5137994708c40d212d39",
"assets/assets/icon/add_circle_icon.png": "b311e053f9831f3c559ea2a3dabd76fe",
"assets/assets/icon/down_arrow_white.png": "1deddfe1d52d2cbcb99c1c2a7a742bdd",
"assets/assets/icon/corner.png": "262038e81d3143e989f2e742466e1357",
"assets/assets/icon/soccer_geeks.gif": "810be4faef5bb0e05939405276b59b1f",
"assets/assets/icon/empty_todo.png": "1dc3b133c5bc8c99d2ee747e6dbcf917",
"assets/assets/icon/icon_blue_tick.svg": "8233a9653cbcc943516af603adb3334f",
"assets/assets/icon/home.png": "712ed8c0adc043511d3b5f336ba24640",
"assets/assets/icon/icon_grey_text.svg": "f7761df81b3bab84ff4f332fa4ce4249",
"assets/assets/icon/question_icon.svg": "d2192c1b8d8022b54e86d47244591836",
"assets/assets/icon/icon_grey_no_game_result.svg": "8396e338c5acd35c1e6a61b9efe2d6a9",
"assets/assets/icon/add_mid_gray_blue.png": "74626459538a3ed4db9923d1dd602982",
"assets/assets/icon/club_bottom.png": "f3b24f355d802725a51feb57bb15dbe1",
"assets/assets/icon/goalkeeper1.png": "d8d0835085633d6d51dfb3c46ba81531",
"assets/assets/icon/close.png": "fdc1104852b30e62268519a14af28ff3",
"assets/assets/icon/home_new.svg": "093228663b7ddc2c2e70b14c1a7f6708",
"assets/assets/icon/question_icon.png": "f9d658f24696914358315ca847d2768e",
"assets/assets/icon/deleteIcon.png": "14f76d972b4e2f2a3c45da3d6a575b9b",
"assets/assets/icon/contact.png": "a976518d376856668480a9010ee7d8f1",
"assets/assets/icon/task_list_check.png": "da9ab3c30ea4d4a2eda955b71a624e6d",
"assets/assets/icon/football_animation.gif": "8c9775ed1a90944be36e8ea8db634deb",
"assets/assets/icon/teams_icon.png": "3f282b799b8bdd9d5f9e3e511ca0a076",
"assets/assets/icon/icon_grey_email.svg": "2030daef78099747abba729fe1d71a83",
"assets/assets/icon/duplicate.png": "60aa3b54c824214cf01813b9fb12ac75",
"assets/assets/icon/penaltykick.png": "47f65a160f45b829b76f958e44d3c1b9",
"assets/assets/icon/appbar_forword_icon.png": "186eda51162fa4fe244bca4fe44e5dc9",
"assets/assets/icon/watch_time_icon.png": "5e75641d35803d05637214fe487dbe17",
"assets/assets/icon/call.png": "6df3cdcf8ec4301330e2990488e1f172",
"assets/assets/icon/tables.png": "6f04d1431f94fc4bff0faccf5d68f74e",
"assets/assets/icon/addplayerIcon.png": "31460f11e194fc5d56747c5a862bc5bd",
"assets/assets/icon/CompititioncupGrey.png": "4e98d19b0ac79675fd5dd53ffab9633f",
"assets/assets/icon/edit_icon.png": "539bf015ea3750df32bd894c823fbc61",
"assets/assets/icon/rightLeft.png": "e6d447915e00482e00bb7335887cf7de",
"assets/assets/icon/check.png": "0cb5545da7d8f9c85253dc7066a2ad93",
"assets/assets/icon/profile_new.svg": "deb53bcd8cde2b11bd59eeac5e1f62fa",
"assets/assets/icon/boll.png": "81c026dfdadb134180ec9e4858d55e20",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "f41c4c6f8d4079b550c3fa8d2bc9ebeb",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "c6bf59edfd56dddc3a4e0df7fdbdef1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

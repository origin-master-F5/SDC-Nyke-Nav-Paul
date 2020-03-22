var rawData = [
    {
        "name": "Nike Air Max 2090\nNike Air Max 2090\nMen's Shoe\n1 Color\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-541527e2-64e0-4873-8fb6-bdf7d903bf3b/air-max-2090-mens-shoe-bL8lLT.jpg",
        "image_url": "https://www.nike.com/t/air-max-2090-mens-shoe-bL8lLT/CT7695-100"
    },
    {
        "name": "Nike Air Max 90\nNike Air Max 90\nMen's Shoe\n3 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9f7f04c0-92b5-4209-8a34-59ff0f978b2a/air-max-90-mens-shoe-xSPlJ1.jpg",
        "image_url": "https://www.nike.com/t/air-max-90-mens-shoe-xSPlJ1/CD0881-101"
    },
    {
        "name": "Air Jordan 3 Retro SE\nAir Jordan 3 Retro SE\nMen's Shoe\n1 Color\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-8334fb00-7956-46b7-b74e-ae0d87915a74/air-jordan-3-retro-se-mens-shoe-jzW36H.jpg",
        "image_url": "https://www.nike.com/t/air-jordan-3-retro-se-mens-shoe-jzW36H/CK5692-600"
    },
    {
        "name": "Nike Adapt BB 2.0\nNike Adapt BB 2.0\nBasketball Shoe\n1 Color\n$400",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/134cfdfb-418f-4453-bbf8-d7286b21329e/adapt-bb-2-basketball-shoe-vdFwKS.jpg",
        "image_url": "https://www.nike.com/t/adapt-bb-2-basketball-shoe-vdFwKS/BQ5397-001"
    },
    {
        "name": "Nike Air Force 1 Low Black History Month\nNike Air Force 1 Low Black History Month\nMen's Shoe\n1 Color\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2272c28e-f1e4-4d06-acb1-66cbb4af0115/air-force-1-low-black-history-month-mens-shoe-bBXwTW.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-low-black-history-month-mens-shoe-bBXwTW/CT5534-001"
    },
    {
        "name": "Nike Air Max 95 Black History Month\nNike Air Max 95 Black History Month\nMen's Shoe\n1 Color\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f84119da-dfaf-4de4-bfd4-d5d16eb53c79/air-max-95-black-history-month-mens-shoe-DpRhS6.jpg",
        "image_url": "https://www.nike.com/t/air-max-95-black-history-month-mens-shoe-DpRhS6/CT7435-901"
    },
    {
        "name": "LeBron 17\nLeBron 17\nBasketball Shoe\n6 Colors\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/beb8a75f-6d77-4080-966c-f09d980d34e2/lebron-17-basketball-shoe-6LSXgh.jpg",
        "image_url": "https://www.nike.com/t/lebron-17-basketball-shoe-6LSXgh/BQ3177-005"
    },
    {
        "name": "PG 4\nPG 4\nBasketball Shoe\n3 Colors\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5175b8a4-0f2e-4a1a-a2ce-caab16c9676d/pg-4-basketball-shoe-tszRns.jpg",
        "image_url": "https://www.nike.com/t/pg-4-basketball-shoe-tszRns/CD5079-002"
    },
    {
        "name": "Nike React Infinity Run Flyknit\nNike React Infinity Run Flyknit\nMen's Running Shoe\n5 Colors\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7323f202-5cd0-444f-84c8-5f1cef2bccfa/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
        "image_url": "https://www.nike.com/t/react-infinity-run-flyknit-mens-running-shoe-zX42Nc/CD4371-005"
    },
    {
        "name": "Nike Air Zoom SuperRep\nNike Air Zoom SuperRep\nMen's HIIT Class Shoe\n4 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7cd306a4-90b1-454e-a884-8ebf4d3afc77/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW/CD3460-223"
    },
    {
        "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoe\n1 Color\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c0bd73b0-8077-4f97-990b-2697ada65d16/air-max-270-react-mens-shoe-dXfwls.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoe-dXfwls/CW2625-100"
    },
    {
        "name": "Nike MX-720-818\nNike MX-720-818\nMen's Shoe\n1 Color\n$190",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6dd58b9a-e644-4bad-8a45-d2f5a87cf427/mx-720-818-mens-shoe-gsXgvs.jpg",
        "image_url": "https://www.nike.com/t/mx-720-818-mens-shoe-gsXgvs/CW2621-001"
    },
    {
        "name": "Nike Air Force 1 '07 LV8\nNike Air Force 1 '07 LV8\nMen's Shoe\n4 Colors\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1f51dcac-1693-4c3b-8a99-fc6df688ef43/air-force-1-07-lv8-mens-shoe-LpqwrH.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-07-lv8-mens-shoe-LpqwrH/CD0887-001"
    },
    {
        "name": "Nike Air Force 1 React\nNike Air Force 1 React\nMen's Shoe\n3 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-fe0b0aa8-5a11-4839-b1ae-28358239e214/air-force-1-react-mens-shoe-b7HKxL.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-react-mens-shoe-b7HKxL/CD4366-100"
    },
    {
        "name": "Nike React Vision\nNike React Vision\nMen's Shoe\n3 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/db6c8501-6bd6-459f-9427-348ed05dfc84/react-vision-mens-shoe-k3L6kP.jpg",
        "image_url": "https://www.nike.com/t/react-vision-mens-shoe-k3L6kP/CD4373-002"
    },
    {
        "name": "Nike Air Max 270 React ENG\nNike Air Max 270 React ENG\nMen's Shoe\n4 Colors\n$170",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/80597f5e-8743-4637-8597-c270d8287fa9/air-max-270-react-eng-mens-shoe-x1NpJv.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-react-eng-mens-shoe-x1NpJv/CD0113-401"
    },
    {
        "name": "Nike Air Max 90 Premium\nNike Air Max 90 Premium\nShoe\n2 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ce6b3c87-ddcd-4b45-bba2-5ec92c8d1dd1/air-max-90-premium-shoe-LZFTFf.jpg",
        "image_url": "https://www.nike.com/t/air-max-90-premium-shoe-LZFTFf/CJ1794-600"
    },
    {
        "name": "Nike Air VaporMax 360\nNike Air VaporMax 360\nMen's Shoe\n7 Colors\n$225",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4da78a37-07c4-434c-a226-daef3f7437e1/air-vapormax-360-mens-shoe-b09bdB.jpg",
        "image_url": "https://www.nike.com/t/air-vapormax-360-mens-shoe-b09bdB/CK2718-004"
    },
    {
        "name": "Nike Air Max 90\nNike Air Max 90\nMen's Shoe\n4 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/air-max-90-mens-shoe-6n3vKB.jpg",
        "image_url": "https://www.nike.com/t/air-max-90-mens-shoe-6n3vKB/CN8490-002"
    },
    {
        "name": "Air Jordan 1 Retro High OG\nAir Jordan 1 Retro High OG\nShoe\n1 Color\n$118.97\n$170",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ebf6cc14-da6b-45f0-b463-9a7f01cc9834/air-jordan-1-retro-high-og-shoe-rjZHSh.jpg",
        "image_url": "https://www.nike.com/t/air-jordan-1-retro-high-og-shoe-rjZHSh/555088-060"
    },
    {
        "name": "Air Jordan 1 Mid\nAir Jordan 1 Mid\nShoe\n7 Colors\n$115",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/71584fa5-f265-4967-95b1-8cc2f6e09e78/air-jordan-1-mid-shoe-1zMCFJ.jpg",
        "image_url": "https://www.nike.com/t/air-jordan-1-mid-shoe-1zMCFJ/554724-068"
    },
    {
        "name": "Nike Renew Run\nNike Renew Run\nMen's Running Shoe\n6 Colors\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/915f6f9c-8804-47e2-ba77-f29239445a0a/renew-run-mens-running-shoe-x40hr3.jpg",
        "image_url": "https://www.nike.com/t/renew-run-mens-running-shoe-x40hr3/CK6357-002"
    },
    {
        "name": "Nike Air Zoom Pegasus 36\nNike Air Zoom Pegasus 36\nMen's Running Shoe\n15 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3f602f90-9484-4eec-a7cd-c0a4dd879b29/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-pegasus-36-mens-running-shoe-D24Mcz/AQ2203-602"
    },
    {
        "name": "Nike Air Force 1 '07\nNike Air Force 1 '07\nMen's Shoe\n2 Colors\n$90",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/jomszuqr8gw3h18xhpro/air-force-1-07-mens-shoe-JkTGzADv.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-07-mens-shoe-JkTGzADv/315122-111"
    },
    {
        "name": "Nike Air Force 1 '07\nNike Air Force 1 '07\nMen's Shoe\n3 Colors\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-mens-shoe-TjqcX1.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-07-mens-shoe-TjqcX1/CJ0952-100"
    },
    {
        "name": "Kyrie 6 Trophies\nKyrie 6 Trophies\nBasketball Shoe\n1 Color\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/34b7a40d-5113-4833-baa7-4063994f6545/kyrie-6-trophies-basketball-shoe-Lw61xf.jpg",
        "image_url": "https://www.nike.com/t/kyrie-6-trophies-basketball-shoe-Lw61xf/CD5026-900"
    },
    {
        "name": "Kyrie 6\nKyrie 6\nBasketball Shoe\n6 Colors\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/efb992a9-ceee-407b-abed-02917b7ae7a6/kyrie-6-basketball-shoe-TW3wsC.jpg",
        "image_url": "https://www.nike.com/t/kyrie-6-basketball-shoe-TW3wsC/BQ4630-003"
    },
    {
        "name": "LeBron 17 Monstars\nLeBron 17 Monstars\nBasketball Shoe\n1 Color\n$225",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f9b8eeb0-2a77-41d3-ad6d-233491fbe365/lebron-17-monstars-basketball-shoe-CR7772.jpg",
        "image_url": "https://www.nike.com/t/lebron-17-monstars-basketball-shoe-CR7772/CD5050-400"
    },
    {
        "name": "LeBron 17 I Promise\nLeBron 17 I Promise\nBasketball Shoe\n1 Color\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/65fa62a0-71ff-45fc-809e-0e624678fedd/lebron-17-i-promise-basketball-shoe-DcJ6sx.jpg",
        "image_url": "https://www.nike.com/t/lebron-17-i-promise-basketball-shoe-DcJ6sx/CD5052-300"
    },
    {
        "name": "Zoom Freak 1 Employee of the Month\nZoom Freak 1 Employee of the Month\nBasketball Shoe\n1 Color\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/89622a20-20d9-4ac7-acf1-a01ded1208ae/zoom-freak-1-employee-of-the-month-basketball-shoe-1GWdw1.jpg",
        "image_url": "https://www.nike.com/t/zoom-freak-1-employee-of-the-month-basketball-shoe-1GWdw1/CD4962-001"
    },
    {
        "name": "PG 4 Gatorade ASW\nPG 4 Gatorade ASW\nBasketball Shoe\n2 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bb4e17cf-6475-4def-8744-9f24588737d1/pg-4-gatorade-asw-basketball-shoe-fPZMr4.jpg",
        "image_url": "https://www.nike.com/t/pg-4-gatorade-asw-basketball-shoe-fPZMr4/CD5078-700"
    },
    {
        "name": "Nike Air Max 90\nNike Air Max 90\nMen's Shoe\n1 Color\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/baed92a3-318a-4769-b4a4-b860da62ada8/air-max-90-mens-shoe-sTJtCH.jpg",
        "image_url": "https://www.nike.com/t/air-max-90-mens-shoe-sTJtCH/CT5066-100"
    },
    {
        "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoes\n1 Color\n$170",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f313ae2a-9ce1-4ac6-a01e-cb79e4b364ad/air-max-270-react-mens-shoes-BGV3Hm.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoes-BGV3Hm/CT5064-100"
    },
    {
        "name": "Nike Air Max 720 20\nNike Air Max 720 20\nMen's Shoe\n1 Color\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f06d2355-a5d0-40f5-8b9d-e90c9a739ea7/air-max-720-20-mens-shoe-qZzvvn.jpg",
        "image_url": "https://www.nike.com/t/air-max-720-20-mens-shoe-qZzvvn/CT5229-100"
    },
    {
        "name": "LeBron 7 QS\nLeBron 7 QS\nMen's Shoe\n2 Colors\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-dc3186d3-9d78-489f-b168-9a44f83fc5ea/lebron-7-qs-mens-shoe-DN0BJz.jpg",
        "image_url": "https://www.nike.com/t/lebron-7-qs-mens-shoe-DN0BJz/CU5646-400"
    },
    {
        "name": "Nike Zoom KD12 Don C\nNike Zoom KD12 Don C\nBasketball Shoe\n1 Color\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b64f0952-92c5-459a-a320-c7690b455208/zoom-kd12-don-c-basketball-shoe-sKSVWd.jpg",
        "image_url": "https://www.nike.com/t/zoom-kd12-don-c-basketball-shoe-sKSVWd/CD4982-900"
    },
    {
        "name": "Air Jordan XXXIV\nAir Jordan XXXIV\nBasketball Shoe\n5 Colors\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4837ab50-c03a-44dc-adaa-8e1e5ce7bc0a/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg",
        "image_url": "https://www.nike.com/t/air-jordan-xxxiv-basketball-shoe-RG4jCV/AR3240-101"
    },
    {
        "name": "Nike Blazer Mid Premium\nNike Blazer Mid Premium\nMen's Shoe\n2 Colors\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-0b622f4f-a108-447c-80fb-2dd99d1a403c/blazer-mid-premium-mens-shoe-JWQfgd.jpg",
        "image_url": "https://www.nike.com/t/blazer-mid-premium-mens-shoe-JWQfgd/CU6679-100"
    },
    {
        "name": "Nike Air Force 1 Premium\nNike Air Force 1 Premium\nMen's Shoe\n2 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bb6d15c2-f315-411c-9cfe-1b5fa42be4fc/air-force-1-premium-mens-shoe-mcf5r6.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-premium-mens-shoe-mcf5r6/CU6675-100"
    },
    {
        "name": "Nike Blazer Mid '77 Vintage\nNike Blazer Mid '77 Vintage\nShoe\n4 Colors\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg",
        "image_url": "https://www.nike.com/t/blazer-mid-77-vintage-shoe-flCCX4/BQ6806-100"
    },
    {
        "name": "Nike Killshot 2 Leather\nNike Killshot 2 Leather\nMen's Shoe\n4 Colors\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dlyapben5bidcjm1vmfh/killshot-2-leather-mens-shoe-zrq1wk.jpg",
        "image_url": "https://www.nike.com/t/killshot-2-leather-mens-shoe-zrq1wk/432997-121"
    },
    {
        "name": "Nike Air VaporMax Flyknit 3\nNike Air VaporMax Flyknit 3\nMen's Shoe\n9 Colors\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/df72e1ef-04d2-4eb0-9069-b20cf3b01e1b/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
        "image_url": "https://www.nike.com/t/air-vapormax-flyknit-3-mens-shoe-JsWsB7/AJ6900-012"
    },
    {
        "name": "Nike Air VaporMax Plus\nNike Air VaporMax Plus\nMen's Shoe\n6 Colors\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4caca439-6eff-4347-bfa7-3f0c06f6af03/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
        "image_url": "https://www.nike.com/t/air-vapormax-plus-mens-shoe-w4xgr4/CW6973-600"
    },
    {
        "name": "Nike x Undercover React Presto\nNike x Undercover React Presto\nShoe\n2 Colors\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/57925393-adc8-485c-9ea7-9be7f1ef35d6/undercover-react-presto-shoe-BWlhSx.jpg",
        "image_url": "https://www.nike.com/t/undercover-react-presto-shoe-BWlhSx/CU3459-200"
    },
    {
        "name": "Nike React Presto Premium\nNike React Presto Premium\nMen's Shoe\n2 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/t7a1cgvaqu3zvxafke3f/react-presto-premium-mens-shoe-8gSr9m.jpg",
        "image_url": "https://www.nike.com/t/react-presto-premium-mens-shoe-8gSr9m/CN7664-800"
    },
    {
        "name": "Nike Air Max 97\nNike Air Max 97\nMen's Shoe\n5 Colors\n$170",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/hsbbi3yac0t8ski7qkcp/air-max-97-mens-shoe-3BnJmw.jpg",
        "image_url": "https://www.nike.com/t/air-max-97-mens-shoe-3BnJmw/CI3708-600"
    },
    {
        "name": "Nike CruzrOne\nNike CruzrOne\nUnisex Shoe\n2 Colors\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ef84ce87-b18b-4f58-9538-5fa273691a25/cruzrone-unisex-shoe-PMDCgh.jpg",
        "image_url": "https://www.nike.com/t/cruzrone-unisex-shoe-PMDCgh/CD7307-700"
    },
    {
        "name": "NikeCourt Tech Challenge 20\nNikeCourt Tech Challenge 20\nMen’s Tennis Shoe\n1 Color\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-61fe9950-2789-4a8f-9a3c-caf8f6899949/nikecourt-tech-challenge-20-mens-tennis-shoe-jh124m.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-tech-challenge-20-mens-tennis-shoe-jh124m/BQ0234-100"
    },
    {
        "name": "Nike Air Max 1 DNA Ch. 1\nNike Air Max 1 DNA Ch. 1\nMen's Shoe\n1 Color\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/rykd0rb1tzzqks1vpn47/air-max-1-dna-ch-1-mens-shoe-3tFwRJ.jpg",
        "image_url": "https://www.nike.com/t/air-max-1-dna-ch-1-mens-shoe-3tFwRJ/AR3863-100"
    },
    {
        "name": "Nike Air Huarache Run DNA Ch. 1\nNike Air Huarache Run DNA Ch. 1\nMen's Shoe\n1 Color\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/clf3cjy4aoud2tjdsvve/air-huarache-run-dna-ch-1-mens-shoe-kFQcSK.jpg",
        "image_url": "https://www.nike.com/t/air-huarache-run-dna-ch-1-mens-shoe-kFQcSK/AR3864-100"
    },
    {
        "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoe\n8 Colors\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/410b2267-3572-4a6a-82d8-41c1e8d37d0f/air-max-270-react-mens-shoe-zPRv3k.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoe-zPRv3k/CU3014-181"
    },
    {
        "name": "Nike Air Max 270\nNike Air Max 270\nMen's Shoe\n4 Colors\n$150",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/efwa2z2axzuqhv35gxbz/air-max-270-mens-shoe-qVk0Vw.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-mens-shoe-qVk0Vw/AH8050-100"
    },
    {
        "name": "Nike Air Max Excee\nNike Air Max Excee\nMen's Shoe\n1 Color\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4a524ee4-d989-426e-b496-8652ff164df6/air-max-excee-mens-shoe-MhJh6v.jpg",
        "image_url": "https://www.nike.com/t/air-max-excee-mens-shoe-MhJh6v/CD4165-101"
    },
    {
        "name": "Air Jordan 1 Mid SE\nAir Jordan 1 Mid SE\nMen's Shoe\n3 Colors\n$125",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-cdfb4ffd-c3d4-4cb6-8c2e-c0197a27d346/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg",
        "image_url": "https://www.nike.com/t/air-jordan-1-mid-se-mens-shoe-P7bjRV/852542-146"
    },
    {
        "name": "Nike Zoom Pegasus Turbo 2\nNike Zoom Pegasus Turbo 2\nMen's Running Shoe\n8 Colors\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1d28f6b3-42d8-4798-92af-a88fd2a9c3d4/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
        "image_url": "https://www.nike.com/t/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3/AT2863-008"
    },
    {
        "name": "Nike Air Zoom Pegasus 36 FlyEase\nNike Air Zoom Pegasus 36 FlyEase\nMen's Running Shoe\n6 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e01e5168-d490-43a2-abd8-49c98efa5485/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV/BV0613-601"
    },
    {
        "name": "Nike Joyride Dual Run\nNike Joyride Dual Run\nMen's Running Shoe\n7 Colors\n$97.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7d45db00-3cd3-41b4-8f5d-1d180bebc28f/joyride-dual-run-mens-running-shoe-Gvfp81.jpg",
        "image_url": "https://www.nike.com/t/joyride-dual-run-mens-running-shoe-Gvfp81/CD4365-101"
    },
    {
        "name": "Air Jordan 6 Retro\nAir Jordan 6 Retro\nShoe\n1 Color\n$175.97\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/n87c9iafnghdqiaxpbt5/air-jordan-6-retro-shoe-mgDVSQ.jpg",
        "image_url": "https://www.nike.com/t/air-jordan-6-retro-shoe-mgDVSQ/CT5350-401"
    },
    {
        "name": "Nike Air Max Plus III\nNike Air Max Plus III\nMen's Shoe\n5 Colors\n$171.97\n$190",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/v4tjxe6v0qrn6hokf8za/air-max-plus-iii-mens-shoe-7STfbQ.jpg",
        "image_url": "https://www.nike.com/t/air-max-plus-iii-mens-shoe-7STfbQ/CJ9684-001"
    },
    {
        "name": "Nike Air Force 1 Winter GORE-TEX\nNike Air Force 1 Winter GORE-TEX\nBoot\n3 Colors\n$153.97\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/yz74fisrj06b2wc9070l/air-force-1-winter-gore-tex-boot-jl4943.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-winter-gore-tex-boot-jl4943/CQ7211-001"
    },
    {
        "name": "Nike React-Type GTX\nNike React-Type GTX\nMen's Shoe\n2 Colors\n$123.97\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/wzdaz0fenhvbhuhnbw49/react-type-gtx-mens-shoe-lHpZHN.jpg",
        "image_url": "https://www.nike.com/t/react-type-gtx-mens-shoe-lHpZHN/BQ4737-002"
    },
    {
        "name": "Zoom Freak 1 Multi\nZoom Freak 1 Multi\nBasketball Shoe\n1 Color\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3eb4b3cd-8ccd-4e19-903c-fb681f0e4e1e/zoom-freak-1-multi-basketball-shoe-9gFS6H.jpg",
        "image_url": "https://www.nike.com/t/zoom-freak-1-multi-basketball-shoe-9gFS6H/CT8476-800"
    },
    {
        "name": "Zoom Freak 1 Soul Glo\nZoom Freak 1 Soul Glo\nBasketball Shoe\n8 Colors\n$117.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2bd27653-9e2a-4cc9-9eab-1c01915c1804/zoom-freak-1-soul-glo-basketball-shoe-tmk8Hw.jpg",
        "image_url": "https://www.nike.com/t/zoom-freak-1-soul-glo-basketball-shoe-tmk8Hw/BQ5422-003"
    },
    {
        "name": "Jordan Air Zoom 85 Runner\nJordan Air Zoom 85 Runner\nMen's Training Shoe\n2 Colors\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cjqeqrn1gtnbs8q4nywv/jordan-air-zoom-85-runner-mens-training-shoe-nZDpPD.jpg",
        "image_url": "https://www.nike.com/t/jordan-air-zoom-85-runner-mens-training-shoe-nZDpPD/CI0055-106"
    },
    {
        "name": "Nike Joyride Run Flyknit\nNike Joyride Run Flyknit\nMen's Running Shoe\n10 Colors\n$134.97\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/34e2e91d-0e33-4780-8cb7-52f6d3630baa/joyride-run-flyknit-mens-running-shoe-PjmR5M.jpg",
        "image_url": "https://www.nike.com/t/joyride-run-flyknit-mens-running-shoe-PjmR5M/CT1175-001"
    },
    {
        "name": "Nike React Presto\nNike React Presto\nMen's Shoe\n8 Colors\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f612fadc-1ab9-4b02-a01e-95eed8e2bf04/react-presto-mens-shoe-c4Rbf6.jpg",
        "image_url": "https://www.nike.com/t/react-presto-mens-shoe-c4Rbf6/AV2605-007"
    },
    {
        "name": "Nike Air Max 270 Special Edition\nNike Air Max 270 Special Edition\nShoe\n2 Colors\n$130.97\n$170",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4d988d16-fc7a-456c-943b-28c5d33fe8a7/air-max-270-special-edition-shoe-2ST4kX.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-special-edition-shoe-2ST4kX/CQ6549-001"
    },
    {
        "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoe\n11 Colors\n$107.97\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a0vhuhln1moerak2kfej/air-max-270-react-mens-shoe-bZ8t5l.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoe-bZ8t5l/AO4971-700"
    },
    {
        "name": "Nike x Undercover Air Max 720\nNike x Undercover Air Max 720\nShoe\n3 Colors\n$143.97\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cqyrvdnc0mcnr4gognu0/undercover-air-max-720-shoe-bspk4f.jpg",
        "image_url": "https://www.nike.com/t/undercover-air-max-720-shoe-bspk4f/CN2408-600"
    },
    {
        "name": "Nike Air Max 720\nNike Air Max 720\nMen's Shoe\n17 Colors\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/isqhvxcva5clgvpan8q2/air-max-720-mens-shoe-Nz7NKG.jpg",
        "image_url": "https://www.nike.com/t/air-max-720-mens-shoe-Nz7NKG/AO2924-007"
    },
    {
        "name": "Nike Vaporfly 4% Flyknit\nNike Vaporfly 4% Flyknit\nRunning Shoe\n2 Colors\n$186.97\n$250",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zepdjjflfduhq1rlif8a/vaporfly-4-flyknit-running-shoe-v7G3FB.jpg",
        "image_url": "https://www.nike.com/t/vaporfly-4-flyknit-running-shoe-v7G3FB/AJ3857-400"
    },
    {
        "name": "Nike React Metcon\nNike React Metcon\nMen's Training Shoe\n4 Colors\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1119d748-399a-47fd-a1ce-7ab951421379/react-metcon-mens-training-shoe-1G703V.jpg",
        "image_url": "https://www.nike.com/t/react-metcon-mens-training-shoe-1G703V/BQ6044-010"
    },
    {
        "name": "Nike Free X Metcon 2\nNike Free X Metcon 2\nMen's Training Shoe\n11 Colors\n$89.97\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ntapmkehmwfn7keay2v7/free-x-metcon-2-mens-training-shoe-9s2JzN.jpg",
        "image_url": "https://www.nike.com/t/free-x-metcon-2-mens-training-shoe-9s2JzN/AQ8306-061"
    },
    {
        "name": "Nike Metcon 5\nNike Metcon 5\nMen's Training Shoe\n12 Colors\n$99.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bsuryaliborpygbi5ljr/metcon-5-mens-training-shoe-lFwjMP.jpg",
        "image_url": "https://www.nike.com/t/metcon-5-mens-training-shoe-lFwjMP/AQ1189-001"
    },
    {
        "name": "Nike Air Flight 89\nNike Air Flight 89\nMen's Shoe\n1 Color\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bbc0d557-c39c-4f9f-9b9b-d188d5594baf/air-flight-89-mens-shoe-FWG1cB.jpg",
        "image_url": "https://www.nike.com/t/air-flight-89-mens-shoe-FWG1cB/CT8478-001"
    },
    {
        "name": "Nike Air Max 270 SE\nNike Air Max 270 SE\nMen's Shoe\n1 Color\n$170",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/24e9ad44-a956-4ec1-93f4-b43a59aaf179/air-max-270-se-mens-shoe-ckFSGJ.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-se-mens-shoe-ckFSGJ/CD6615-100"
    },
    {
        "name": "Nike AlphaDunk\nNike AlphaDunk\nBasketball Shoe\n6 Colors\n$108.97\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/veiujfavsd0rrvkx22hw/alphadunk-basketball-shoe-PVlFH3.jpg",
        "image_url": "https://www.nike.com/t/alphadunk-basketball-shoe-PVlFH3/BQ5401-002"
    },
    {
        "name": "Nike Epic React Flyknit 2\nNike Epic React Flyknit 2\nMen's Running Shoe\n9 Colors\n$119.97\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dgxtlwd9op5jzjmjfii5/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg",
        "image_url": "https://www.nike.com/t/epic-react-flyknit-2-mens-running-shoe-2S0Cn1/BQ8928-101"
    },
    {
        "name": "Nike SB Zoom Stefan Janoski Mid Crafted\nNike SB Zoom Stefan Janoski Mid Crafted\nMen's Skate Shoe\n3 Colors\n$59.97\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/glosmwghgrsrzjwoyhqu/sb-zoom-stefan-janoski-mid-crafted-mens-skate-shoe-M85vpQ.jpg",
        "image_url": "https://www.nike.com/t/sb-zoom-stefan-janoski-mid-crafted-mens-skate-shoe-M85vpQ/AQ7460-002"
    },
    {
        "name": "Nike Mercurial Vapor 13 Elite FG\nNike Mercurial Vapor 13 Elite FG\nFirm-Ground Soccer Cleat\n7 Colors\n$250",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-ec274ff0-3245-4853-9de3-a5f1553640bc/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
        "image_url": "https://www.nike.com/t/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2/AQ4176-851"
    },
    {
        "name": "Kyrie 6\nKyrie 6\nBasketball Shoe\n1 Color\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2e79a2e2-3b2f-40f7-8bae-627902e504af/kyrie-6-basketball-shoe-KQmCXH.jpg",
        "image_url": "https://www.nike.com/t/kyrie-6-basketball-shoe-KQmCXH/BQ4630-100"
    },
    {
        "name": "Nike Air Max Dia\nNike Air Max Dia\nWomen's Shoe\n10 Colors\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/75615b2a-8536-4bf6-a8eb-e81bb93d9151/air-max-dia-womens-shoe-vT3Cl5.jpg",
        "image_url": "https://www.nike.com/t/air-max-dia-womens-shoe-vT3Cl5/CI3898-200"
    },
    {
        "name": "Nike React Gato\nNike React Gato\nIndoor/Court Soccer Shoe\n2 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-8282da43-12d4-4bdc-8e99-fb2698649c4e/react-gato-indoor-court-soccer-shoe-7rKX9f.jpg",
        "image_url": "https://www.nike.com/t/react-gato-indoor-court-soccer-shoe-7rKX9f/CT0550-018"
    },
    {
        "name": "Nike Air Max 90 SP\nNike Air Max 90 SP\nWomen's Shoe\n1 Color\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1efccc92-b5ce-4802-bca8-a93c3e909f87/air-max-90-sp-womens-shoe-plk6Cf.jpg",
        "image_url": "https://www.nike.com/t/air-max-90-sp-womens-shoe-plk6Cf/CQ6639-700"
    },
    {
        "name": "Nike SB Zoom Stefan Janoski RM Premium\nNike SB Zoom Stefan Janoski RM Premium\nSkate Shoe\n2 Colors\n$53.97\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cxx9oleif175fozhl2zt/sb-zoom-stefan-janoski-rm-premium-skate-shoe-vzr9KD.jpg",
        "image_url": "https://www.nike.com/t/sb-zoom-stefan-janoski-rm-premium-skate-shoe-vzr9KD/CI2231-300"
    },
    {
        "name": "Nike Revolution 5\nNike Revolution 5\nMen's Running Shoe\n11 Colors\n$65",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/akerfosal7ptigr21k5k/revolution-5-mens-running-shoe-TzTL9k.jpg",
        "image_url": "https://www.nike.com/t/revolution-5-mens-running-shoe-TzTL9k/BQ3204-001"
    },
    {
        "name": "Nike Drop Type LX\nNike Drop Type LX\nMen's Shoe\n5 Colors\n$48.97\n$75",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zshy2qckt6uptobhns57/drop-type-lx-mens-shoe-sFVJlr.jpg",
        "image_url": "https://www.nike.com/t/drop-type-lx-mens-shoe-sFVJlr/AV6697-001"
    },
    {
        "name": "Nike Flex Control 4\nNike Flex Control 4\nMen's Training Shoe\n4 Colors\n$65",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e91623bb-e3c9-4452-883d-9d12d5544752/flex-control-4-mens-training-shoe-dP3qGr.jpg",
        "image_url": "https://www.nike.com/t/flex-control-4-mens-training-shoe-dP3qGr/CD0197-100"
    },
    {
        "name": "Nike Benassi JDI Fanny Pack\nNike Benassi JDI Fanny Pack\nMen's Slide\n2 Colors\n$27.97\n$55",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zqzgpjucsk5xgztvxitm/benassi-jdi-fanny-pack-mens-slide-eKKORn.jpg",
        "image_url": "https://www.nike.com/t/benassi-jdi-fanny-pack-mens-slide-eKKORn/AO1037-601"
    },
    {
        "name": "Nike React Ianga\nNike React Ianga\nMen's Shoe\n3 Colors\n$114.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/mn1nrgwgu4hzwfisdtdn/react-ianga-mens-shoe-GBwZHW.jpg",
        "image_url": "https://www.nike.com/t/react-ianga-mens-shoe-GBwZHW/AV5555-002"
    },
    {
        "name": "Nike Air Max Impact\nNike Air Max Impact\nBasketball Shoe\n3 Colors\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/idzrmr1in4skgn6go6lf/air-max-impact-basketball-shoe-rT6d0G.jpg",
        "image_url": "https://www.nike.com/t/air-max-impact-basketball-shoe-rT6d0G/CI1396-003"
    },
    {
        "name": "Nike Air Max 270 React Winter\nNike Air Max 270 React Winter\nMen's Shoe\n3 Colors\n$104.97\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ow2wllhgde5brc5sjuck/air-max-270-react-winter-mens-shoe-tCkNHl.jpg",
        "image_url": "https://www.nike.com/t/air-max-270-react-winter-mens-shoe-tCkNHl/CD2049-006"
    },
    {
        "name": "Kyrie Flytrap 3\nKyrie Flytrap 3\nBasketball Shoe\n3 Colors\n$80",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8b15b909-b2c4-454c-a904-8d0d6c3c3b2e/kyrie-flytrap-3-basketball-shoe-98K5l5.jpg",
        "image_url": "https://www.nike.com/t/kyrie-flytrap-3-basketball-shoe-98K5l5/BQ3060-100"
    },
    {
        "name": "NikeCourt Air Max Vapor Wing NRG\nNikeCourt Air Max Vapor Wing NRG\nTennis Shoe\n2 Colors\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9a335805-93e3-4ef7-88f3-b31218a8e00c/nikecourt-air-max-vapor-wing-nrg-tennis-shoe-kXjxSx.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-air-max-vapor-wing-nrg-tennis-shoe-kXjxSx/CK0833-200"
    },
    {
        "name": "Nike Air Max Axis Mid\nNike Air Max Axis Mid\nMen's Shoe\n2 Colors\n$71.97\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d44e916a-ebcb-45a7-9806-80a4a76f6a46/air-max-axis-mid-mens-shoe-JHHfVQ.jpg",
        "image_url": "https://www.nike.com/t/air-max-axis-mid-mens-shoe-JHHfVQ/BQ4017-001"
    },
    {
        "name": "Nike Shox TL\nNike Shox TL\nMen's Shoe\n3 Colors\n$170",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/xa3j5pmlqu9lz6y1xbsb/shox-tl-mens-shoe-18V7MB.jpg",
        "image_url": "https://www.nike.com/t/shox-tl-mens-shoe-18V7MB/AV3595-002"
    },
    {
        "name": "Nike Air Max Motion 2\nNike Air Max Motion 2\nMen's Shoe\n2 Colors\n$69.97\n$85",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7ecb84ad-a330-4326-89c1-95832908ff6a/air-max-motion-2-mens-shoe-Ctfkrt.jpg",
        "image_url": "https://www.nike.com/t/air-max-motion-2-mens-shoe-Ctfkrt/AO0266-013"
    },
    {
        "name": "Nike Blazer Mid '77 Suede\nNike Blazer Mid '77 Suede\nShoe\n2 Colors\n$80.97\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/xy09elgyqwl1neuefc1q/blazer-mid-77-suede-shoe-HxFGDP.jpg",
        "image_url": "https://www.nike.com/t/blazer-mid-77-suede-shoe-HxFGDP/CI1172-200"
    },
    {
        "name": "NikeCourt Air Zoom Vapor X\nNikeCourt Air Zoom Vapor X\nMen’s Hard Court Tennis Shoe\n9 Colors\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ywev6zhcweooinkkgu6h/nikecourt-air-zoom-vapor-x-mens-hard-court-tennis-shoe-pK2RFq.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-air-zoom-vapor-x-mens-hard-court-tennis-shoe-pK2RFq/AA8030-009"
    },
    {
        "name": "Nike Shox R4\nNike Shox R4\nMen's Shoe\n5 Colors\n$113.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dgsw9028aziewyxf277w/shox-r4-mens-shoe-Y04R1B.jpg",
        "image_url": "https://www.nike.com/t/shox-r4-mens-shoe-Y04R1B/104265-053"
    },
    {
        "name": "Nike Air Force 1 High By You\nNike Air Force 1 High By You\nMen's Shoe\n4 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/651f67df-6a1e-40f4-a5eb-02943bc5ba88/custom-nike-air-force-1-high-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-force-1-high-by-you-10000789/502532863"
    },
    {
        "name": "Nike Free TR 8\nNike Free TR 8\nMen's Training Shoe\n2 Colors\n$100",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/n6nacycdyhdyvd3l9eek/free-tr-8-mens-training-shoe-KCv0FL.jpg",
        "image_url": "https://www.nike.com/t/free-tr-8-mens-training-shoe-KCv0FL/CD9473-010"
    },
    {
        "name": "Nike Vapor Untouchable 3 Speed\nNike Vapor Untouchable 3 Speed\nMen's Football Cleat\n2 Colors\n$52.97\n$95",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/pipfczdudabfjxyhqeu5/vapor-untouchable-3-speed-mens-football-cleat-6xLMwl.jpg",
        "image_url": "https://www.nike.com/t/vapor-untouchable-3-speed-mens-football-cleat-6xLMwl/917166-400"
    },
    {
        "name": "Nike Alpha Huarache Elite 2 Low\nNike Alpha Huarache Elite 2 Low\nBaseball Cleat\n8 Colors\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/re05wh3mxb6nbjj40aez/alpha-huarache-elite-2-low-baseball-cleat-W1Bxmm.jpg",
        "image_url": "https://www.nike.com/t/alpha-huarache-elite-2-low-baseball-cleat-W1Bxmm/AJ6873-007"
    },
    {
        "name": "Nike Drop-Type Premium\nNike Drop-Type Premium\nMen's Shoe\n3 Colors\n$85",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/yiffifypfes0i1iuhmxt/drop-type-premium-mens-shoe-TPhpLd.jpg",
        "image_url": "https://www.nike.com/t/drop-type-premium-mens-shoe-TPhpLd/CN6916-400"
    },
    {
        "name": "NikeCourt Vapor X TC Knit\nNikeCourt Vapor X TC Knit\nMen's Tennis Shoe\n1 Color\n$98.97\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b36a2f74-d7e4-4f87-9ac6-3929add3ac12/nikecourt-vapor-x-tc-knit-mens-tennis-shoe-Ksfx1B.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-vapor-x-tc-knit-mens-tennis-shoe-Ksfx1B/BQ0130-100"
    },
    {
        "name": "Nike Air Ghost Racer\nNike Air Ghost Racer\nMen's Shoe\n8 Colors\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ad7fb6e1-ad80-4223-aaa8-5b13f5d16e24/air-ghost-racer-mens-shoe-mnDlxl.jpg",
        "image_url": "https://www.nike.com/t/air-ghost-racer-mens-shoe-mnDlxl/AT5410-601"
    },
    {
        "name": "PG 4 By You (All Star)\nPG 4 By You (All Star)\nBasketball Shoe\n6 Colors\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/acf1007c-cd1c-4eaa-ab07-c72501e3d2df/custom-pg4-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-pg4-by-you-10000797/963872653"
    },
    {
        "name": "Nike Free RN 5.0\nNike Free RN 5.0\nMen's Running Shoe\n5 Colors\n$49.97\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bb5fvmx0lhtoocexavkg/free-rn-5-mens-running-shoe-K3B5QH.jpg",
        "image_url": "https://www.nike.com/t/free-rn-5-mens-running-shoe-K3B5QH/AQ1289-003"
    },
    {
        "name": "Nike Air Max Alpha Savage\nNike Air Max Alpha Savage\nMen's Training Shoe\n9 Colors\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3b49f441-fd89-4ce0-b890-cf1338f3cb16/air-max-alpha-savage-mens-training-shoe-n5K77G.jpg",
        "image_url": "https://www.nike.com/t/air-max-alpha-savage-mens-training-shoe-n5K77G/AT3378-011"
    },
    {
        "name": "Nike Renew Fusion\nNike Renew Fusion\nMen's Training Shoe\n5 Colors\n$85",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3a188a30-d6e7-432e-b9ca-43c6788b2678/renew-fusion-mens-training-shoe-s43bd8.jpg",
        "image_url": "https://www.nike.com/t/renew-fusion-mens-training-shoe-s43bd8/CD0200-200"
    },
    {
        "name": "Nike Zoom Rize (Team)\nNike Zoom Rize (Team)\nBasketball Shoe\n7 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f2591c2e-5463-4825-b1d6-6d0fe2ad4db3/zoom-rize-team-basketball-shoe-bntnTz.jpg",
        "image_url": "https://www.nike.com/t/zoom-rize-team-basketball-shoe-bntnTz/BQ5468-402"
    },
    {
        "name": "Nike Air Max 200 By You\nNike Air Max 200 By You\nMen's Shoe\n7 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/yrxpfnmmsbrxzhgrx2os/custom-nike-air-max-200-by-you-shoe.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-max-200-by-you-shoe-10000680/624084688"
    },
    {
        "name": "Nike Epic Phantom React A.I.R. Cody Hudson\nNike Epic Phantom React A.I.R. Cody Hudson\nMen's Running Shoe\n1 Color\n$109.97\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bai4flsp7sonxnj2yisg/epic-phantom-react-air-cody-hudson-mens-running-shoe-fMFQKr.jpg",
        "image_url": "https://www.nike.com/t/epic-phantom-react-air-cody-hudson-mens-running-shoe-fMFQKr/CI1718-001"
    },
    {
        "name": "Nike Air Zoom Vomero 14\nNike Air Zoom Vomero 14\nMen's Running Shoe\n10 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/osjcikt2btnisbwfuokx/air-zoom-vomero-14-mens-running-shoe-m4gpHg.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-vomero-14-mens-running-shoe-m4gpHg/AH7857-008"
    },
    {
        "name": "Nike Zoom Rival M 9\nNike Zoom Rival M 9\nTrack Spike\n5 Colors\n$65",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6d7701fb-bb5e-4f3f-8fce-97ac7ab37281/zoom-rival-m-9-track-spike-mCJ29r.jpg",
        "image_url": "https://www.nike.com/t/zoom-rival-m-9-track-spike-mCJ29r/AH1020-004"
    },
    {
        "name": "Nike Zoom Pegasus Turbo 2 Shield Low By You\nNike Zoom Pegasus Turbo 2 Shield Low By You\nMen's Running Shoe\n3 Colors\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6b94e7f2-f33a-4b8b-ae57-498c9d708411/custom-nike-air-zoom-pegasus-36-shield-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-zoom-pegasus-36-shield-by-you-10000731/724158675"
    },
    {
        "name": "Nike Air Max 200 Winter\nNike Air Max 200 Winter\nMen's Shoe\n2 Colors\n$86.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/n3suzj1503xpq8uujgym/air-max-200-winter-mens-shoe-L6vRs7.jpg",
        "image_url": "https://www.nike.com/t/air-max-200-winter-mens-shoe-L6vRs7/BV5485-008"
    },
    {
        "name": "Nike SFB Field 2 8\"\nNike SFB Field 2 8\"\nTactical Boot\n3 Colors\n$170",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dnymaso4ypoj4cfafy0o/sfb-field-2-8-tactical-boot-gkRtlh.jpg",
        "image_url": "https://www.nike.com/t/sfb-field-2-8-tactical-boot-gkRtlh/AO7507-200"
    },
    {
        "name": "Nike Air Max2 Light\nNike Air Max2 Light\nMen's Shoe\n5 Colors\n$90.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/scql0xfb0zbin27ewies/air-max2-light-mens-shoe-TmX93M.jpg",
        "image_url": "https://www.nike.com/t/air-max2-light-mens-shoe-TmX93M/AO1741-104"
    },
    {
        "name": "Nike Zoom Gravity\nNike Zoom Gravity\nMen's Running Shoe\n1 Color\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ae2b29b4-07ac-4b1e-beaa-8eedf8fd322d/zoom-gravity-mens-running-shoe-x3vXDV.jpg",
        "image_url": "https://www.nike.com/t/zoom-gravity-mens-running-shoe-x3vXDV/BQ3202-400"
    },
    {
        "name": "Nike Run All Day 2\nNike Run All Day 2\nMen’s Running Shoe\n9 Colors\n$70",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/579f31f4-3eb8-4b3e-9559-3351d5e65207/run-all-day-2-mens-running-shoe-HHhDq9.jpg",
        "image_url": "https://www.nike.com/t/run-all-day-2-mens-running-shoe-HHhDq9/CD0223-002"
    },
    {
        "name": "Nike Alpha Menace Pro 2 Mid\nNike Alpha Menace Pro 2 Mid\nMen's Football Cleat\n14 Colors\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/447d94eb-6923-48bd-aaaa-4972eb529d2d/alpha-menace-pro-2-mid-mens-football-cleat-XFMBm2.jpg",
        "image_url": "https://www.nike.com/t/alpha-menace-pro-2-mid-mens-football-cleat-XFMBm2/AQ3209-501"
    },
    {
        "name": "Nike Force Savage Shark 2\nNike Force Savage Shark 2\nMen's Football Cleat\n3 Colors\n$60",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-e90db124-60f0-495e-acb0-683ae79ee153/force-savage-shark-2-mens-football-cleat-qKfpsT.jpg",
        "image_url": "https://www.nike.com/t/force-savage-shark-2-mens-football-cleat-qKfpsT/AQ7722-601"
    },
    {
        "name": "Nike Phantom Venom Elite FG\nNike Phantom Venom Elite FG\nFirm-Ground Soccer Cleat\n8 Colors\n$250",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-8e304060-ed5a-443d-b7dc-63b2f4a941f0/phantom-venom-elite-fg-firm-ground-soccer-cleat-FJhnH9.jpg",
        "image_url": "https://www.nike.com/t/phantom-venom-elite-fg-firm-ground-soccer-cleat-FJhnH9/AO7540-106"
    },
    {
        "name": "Nike Air Max Triax 96 SP\nNike Air Max Triax 96 SP\nMen's Shoe\n1 Color\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-0fefccca-7cfa-4b74-b043-7ecc3bbeeba8/air-max-triax-96-sp-mens-shoe-z1ZB60.jpg",
        "image_url": "https://www.nike.com/t/air-max-triax-96-sp-mens-shoe-z1ZB60/CT5543-300"
    },
    {
        "name": "Jordan ADG 2\nJordan ADG 2\nMen's Golf Shoe\n2 Colors\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d6f66b63-127f-4856-a4ed-2fc54f2aa4d6/jordan-adg-2-mens-golf-shoe-lcbnnm.jpg",
        "image_url": "https://www.nike.com/t/jordan-adg-2-mens-golf-shoe-lcbnnm/CT7812-100"
    },
    {
        "name": "Nike Huarache Type\nNike Huarache Type\nMen's Shoe\n4 Colors\n$80.97\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/nbodx3ykzmticjwx1qg0/huarache-type-mens-shoe-qqS4Np.jpg",
        "image_url": "https://www.nike.com/t/huarache-type-mens-shoe-qqS4Np/BQ5102-400"
    },
    {
        "name": "Nike Air Max2 Light\nNike Air Max2 Light\nMen's Shoe\n6 Colors\n$78.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/gnjpfsqkivpbxgcdfdqw/air-max2-light-mens-shoe-TmX93M.jpg",
        "image_url": "https://www.nike.com/t/air-max2-light-mens-shoe-TmX93M/AO1741-400"
    },
    {
        "name": "Nike Benassi JDI SE\nNike Benassi JDI SE\nMen's Slide\n2 Colors\n$32.97\n$45",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/yablsscoma4bsl3wdvhl/benassi-jdi-se-mens-slide-JRqkgW.jpg",
        "image_url": "https://www.nike.com/t/benassi-jdi-se-mens-slide-JRqkgW/CK0986-002"
    },
    {
        "name": "Nike React Element 87\nNike React Element 87\nMen's Shoe\n2 Colors\n$120.97\n$160",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/tudnyxgsixk1bc0jiy5m/react-element-87-mens-shoe-T2DnwP.jpg",
        "image_url": "https://www.nike.com/t/react-element-87-mens-shoe-T2DnwP/AQ1090-001"
    },
    {
        "name": "NikeCourt Air Max Vapor Wing MS\nNikeCourt Air Max Vapor Wing MS\nMen’s Multi-Surface Tennis Shoe\n4 Colors\n$80",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5260b6a5-e9d8-42f8-ad78-c9a7473feae4/nikecourt-air-max-vapor-wing-ms-mens-multi-surface-tennis-shoe-s4bDtf.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-air-max-vapor-wing-ms-mens-multi-surface-tennis-shoe-s4bDtf/BQ0129-104"
    },
    {
        "name": "Nike Air Max Dia Winter\nNike Air Max Dia Winter\nWomen's Shoe\n3 Colors\n$108.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/nqtk5gageesdr8keiudw/air-max-dia-winter-womens-shoe-t7vZNW.jpg",
        "image_url": "https://www.nike.com/t/air-max-dia-winter-womens-shoe-t7vZNW/BQ9665-001"
    },
    {
        "name": "Nike Mercurial Superfly 7 Academy MG\nNike Mercurial Superfly 7 Academy MG\nMulti-Ground Soccer Cleat\n2 Colors\n$80",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a28bca72-58e1-4684-a82e-f2c4721b61ed/mercurial-superfly-7-academy-mg-multi-ground-soccer-cleat-7w9w96.jpg",
        "image_url": "https://www.nike.com/t/mercurial-superfly-7-academy-mg-multi-ground-soccer-cleat-7w9w96/AT7946-010"
    },
    {
        "name": "Nike React Element 55 Premium\nNike React Element 55 Premium\nMen's Shoe\n2 Colors\n$78.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/jcafn05lk1ft13xbkrsb/react-element-55-premium-mens-shoe-0knPjc.jpg",
        "image_url": "https://www.nike.com/t/react-element-55-premium-mens-shoe-0knPjc/CI3835-001"
    },
    {
        "name": "Nike Zoom Rize (Team)\nNike Zoom Rize (Team)\nBasketball Shoe\n7 Colors\n$86.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/rsfbifisljejjbmjs9aa/zoom-rize-team-basketball-shoe-bntnTz.jpg",
        "image_url": "https://www.nike.com/t/zoom-rize-team-basketball-shoe-bntnTz/BQ5468-600"
    },
    {
        "name": "Nike Todos RN\nNike Todos RN\nMen's Running Shoe\n4 Colors\n$60",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/mkzisa82wxm30lwuaogo/todos-rn-mens-running-shoe-SBn2Dn.jpg",
        "image_url": "https://www.nike.com/t/todos-rn-mens-running-shoe-SBn2Dn/BQ3198-100"
    },
    {
        "name": "Nike SB Zoom Stefan Janoski Slip Mid RM\nNike SB Zoom Stefan Janoski Slip Mid RM\nSkate Shoe\n3 Colors\n$83.97\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/kzrecqelcbez7cxd3goh/sb-zoom-stefan-janoski-slip-mid-rm-skate-shoe-63mLNx.jpg",
        "image_url": "https://www.nike.com/t/sb-zoom-stefan-janoski-slip-mid-rm-skate-shoe-63mLNx/BQ5888-001"
    },
    {
        "name": "Nike SB Zoom Blazer Mid\nNike SB Zoom Blazer Mid\nSkate Shoe\n2 Colors\n$85",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/fambaubeufwpravdy1xs/sb-zoom-blazer-mid-skate-shoe-qX3MZV.jpg",
        "image_url": "https://www.nike.com/t/sb-zoom-blazer-mid-skate-shoe-qX3MZV/864349-002"
    },
    {
        "name": "Nike Air Zoom Winflo 6\nNike Air Zoom Winflo 6\nMen's Running Shoe (Extra-Wide)\n11 Colors\n$74.97\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/sewrscquavccva0nq2ar/air-zoom-wio-6-mens-running-shoe-extra-wide-SHNScG.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-wio-6-mens-running-shoe-extra-wide-SHNScG/BQ9685-004"
    },
    {
        "name": "NikeCourt Air Zoom Vapor X\nNikeCourt Air Zoom Vapor X\nMen’s Hard Court Tennis Shoe\n9 Colors\n$124.97\n$140",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ijti5efshvegiswkkrrz/nikecourt-air-zoom-vapor-x-mens-hard-court-tennis-shoe-pK2RFq.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-air-zoom-vapor-x-mens-hard-court-tennis-shoe-pK2RFq/AA8030-016"
    },
    {
        "name": "Nike Ultra Comfort 3\nNike Ultra Comfort 3\nMen's Slide\n2 Colors\n$40",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/pqnpnytjnidekprsyy8v/ultra-comfort-3-mens-slide-mWHjXt.jpg",
        "image_url": "https://www.nike.com/t/ultra-comfort-3-mens-slide-mWHjXt/AR4494-002"
    },
    {
        "name": "Nike Air Max Dia\nNike Air Max Dia\nWomen's Shoe\n10 Colors\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ea3aaaf0-e516-4da9-ac80-758180d08d2c/air-max-dia-womens-shoe-7Vf0Hb.jpg",
        "image_url": "https://www.nike.com/t/air-max-dia-womens-shoe-7Vf0Hb/CI3898-001"
    },
    {
        "name": "Nike Shox R4\nNike Shox R4\nMen's Shoe\n5 Colors\n$125.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/wvsyitsqbvceuatdhcxg/calzado-shox-r4-Y04R1B.jpg",
        "image_url": "https://www.nike.com/t/shox-r4-mens-shoe-Y04R1B/104265-045"
    },
    {
        "name": "Nike Air Force 1 High By You\nNike Air Force 1 High By You\nMen's Shoe\n4 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5a9f0c22-6cb7-4798-b677-12d783134090/custom-nike-air-force-1-high-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-force-1-high-by-you-10000789/439146202"
    },
    {
        "name": "Nike Free TR 8\nNike Free TR 8\nMen's Training Shoe\n3 Colors\n$89.97\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bmrio039bxikkfpld8rs/free-tr-8-mens-training-shoe-KCv0FL.jpg",
        "image_url": "https://www.nike.com/t/free-tr-8-mens-training-shoe-KCv0FL/CD9473-061"
    },
    {
        "name": "Nike Vapor Untouchable 3 Speed\nNike Vapor Untouchable 3 Speed\nMen's Football Cleat\n2 Colors\n$52.97\n$95",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/hcpijlp5ogpufaappd7e/vapor-untouchable-3-speed-mens-football-cleat-6xLMwl.jpg",
        "image_url": "https://www.nike.com/t/vapor-untouchable-3-speed-mens-football-cleat-6xLMwl/917166-600"
    },
    {
        "name": "Alpha Huarache Elite 2 Low\nAlpha Huarache Elite 2 Low\nBaseball Cleat\n7 Colors\n$90",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/p6adnke9jmitnftkhami/alpha-huarache-elite-2-low-baseball-cleat-W1Bxmm.jpg",
        "image_url": "https://www.nike.com/t/alpha-huarache-elite-2-low-baseball-cleat-W1Bxmm/CI2223-003"
    },
    {
        "name": "Nike Drop-Type Premium\nNike Drop-Type Premium\nMen's Shoe\n3 Colors\n$67.97\n$85",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/qpwa0lysoanceekfbywc/drop-type-premium-mens-shoe-TPhpLd.jpg",
        "image_url": "https://www.nike.com/t/drop-type-premium-mens-shoe-TPhpLd/CN6916-100"
    },
    {
        "name": "NikeCourt Vapor X TC Knit\nNikeCourt Vapor X TC Knit\nMen's Tennis Shoe\n1 Color\n$98.97\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b36a2f74-d7e4-4f87-9ac6-3929add3ac12/nikecourt-vapor-x-tc-knit-mens-tennis-shoe-Ksfx1B.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-vapor-x-tc-knit-mens-tennis-shoe-Ksfx1B/BQ0130-100"
    },
    {
        "name": "Nike Air Ghost Racer\nNike Air Ghost Racer\nMen's Shoe\n8 Colors\n$97.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ad7fb6e1-ad80-4223-aaa8-5b13f5d16e24/air-ghost-racer-mens-shoe-mnDlxl.jpg",
        "image_url": "https://www.nike.com/t/air-ghost-racer-mens-shoe-mnDlxl/AT5410-601"
    },
    {
        "name": "Nike React Gato\nNike React Gato\nIndoor/Court Soccer Shoe\n2 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5589ddbc-6fe3-4422-892e-2c83786ef6c9/react-gato-indoor-court-soccer-shoe-7rKX9f.jpg",
        "image_url": "https://www.nike.com/t/react-gato-indoor-court-soccer-shoe-7rKX9f/CT0550-160"
    },
    {
        "name": "Nike Air Force 1 '07 LV8\nNike Air Force 1 '07 LV8\nMen's Shoe\n2 Colors\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/gunbfzhz7uc3ykr6i5xf/air-force-1-07-lv8-mens-shoe-1qm6ML.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-07-lv8-mens-shoe-1qm6ML/CD0886-001"
    },
    {
        "name": "PG 4 By You (All Star)\nPG 4 By You (All Star)\nBasketball Shoe\n6 Colors\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/acf1007c-cd1c-4eaa-ab07-c72501e3d2df/custom-pg4-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-pg4-by-you-10000797/963872653"
    },
    {
        "name": "Nike Free RN 5.0\nNike Free RN 5.0\nMen's Running Shoe\n2 Colors\n$49.97\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/argvfonll186iftgcgro/free-rn-5-mens-running-shoe-K3B5QH.jpg",
        "image_url": "https://www.nike.com/t/free-rn-5-mens-running-shoe-K3B5QH/AQ1289-601"
    },
    {
        "name": "Nike Air Max Alpha Savage\nNike Air Max Alpha Savage\nMen's Training Shoe\n9 Colors\n$99.97\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/hesgmproeno83mxzv7wk/air-max-alpha-savage-mens-training-shoe-n5K77G.jpg",
        "image_url": "https://www.nike.com/t/air-max-alpha-savage-mens-training-shoe-n5K77G/AT3378-104"
    },
    {
        "name": "Nike Renew Fusion\nNike Renew Fusion\nMen's Training Shoe\n5 Colors\n$67.97\n$85",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/da1e9fc8-fc03-4bd9-8b3a-0ab47184b368/renew-fusion-mens-training-shoe-s43bd8.jpg",
        "image_url": "https://www.nike.com/t/renew-fusion-mens-training-shoe-s43bd8/CD0200-002"
    },
    {
        "name": "Nike Air Max 200 By You\nNike Air Max 200 By You\nMen's Shoe\n7 Colors\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/avzmq8czrxr3swjandpc/custom-nike-air-max-200-by-you-shoe.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-max-200-by-you-shoe-10000680/900101539"
    },
    {
        "name": "Nike Epic Phantom React A.I.R. Cody Hudson\nNike Epic Phantom React A.I.R. Cody Hudson\nMen's Running Shoe\n1 Color\n$109.97\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bai4flsp7sonxnj2yisg/epic-phantom-react-air-cody-hudson-mens-running-shoe-fMFQKr.jpg",
        "image_url": "https://www.nike.com/t/epic-phantom-react-air-cody-hudson-mens-running-shoe-fMFQKr/CI1718-001"
    },
    {
        "name": "Nike Air Zoom Vomero 14\nNike Air Zoom Vomero 14\nMen's Running Shoe (Extra-Wide)\n8 Colors\n$111.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b1130089-dcc1-4a37-bf59-f51a12430b7e/air-zoom-vomero-14-mens-running-shoe-extra-wide-m4gpHg.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-vomero-14-mens-running-shoe-extra-wide-m4gpHg/AQ3121-012"
    },
    {
        "name": "Nike Zoom Rival M 9\nNike Zoom Rival M 9\nTrack Spike\n5 Colors\n$65",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-56df1296-3aa7-44cf-b68a-1158204a94ed/zoom-rival-m-9-track-spike-mCJ29r.jpg",
        "image_url": "https://www.nike.com/t/zoom-rival-m-9-track-spike-mCJ29r/AH1020-604"
    },
    {
        "name": "Nike Air Max Motion 2\nNike Air Max Motion 2\nMen's Shoe\n2 Colors\n$69.97\n$85",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7ecb84ad-a330-4326-89c1-95832908ff6a/air-max-motion-2-mens-shoe-Ctfkrt.jpg",
        "image_url": "https://www.nike.com/t/air-max-motion-2-mens-shoe-Ctfkrt/AO0266-013"
    },
    {
        "name": "Nike Zoom Pegasus Turbo 2 Shield Low By You\nNike Zoom Pegasus Turbo 2 Shield Low By You\nMen's Running Shoe\n3 Colors\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6b94e7f2-f33a-4b8b-ae57-498c9d708411/custom-nike-air-zoom-pegasus-36-shield-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-zoom-pegasus-36-shield-by-you-10000731/724158675"
    },
    {
        "name": "Nike x Stranger Things Cortez (4th of July)\nNike x Stranger Things Cortez (4th of July)\nMen's Shoe\n1 Color\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/vwvl3r41fidt8gftvz1x/stranger-things-cortez-4th-of-july-mens-shoe-0FntDm.jpg",
        "image_url": "https://www.nike.com/t/stranger-things-cortez-4th-of-july-mens-shoe-0FntDm/CK1907-600"
    },
    {
        "name": "Nike Air Max 200 Winter\nNike Air Max 200 Winter\nMen's Shoe\n2 Colors\n$71.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/n3suzj1503xpq8uujgym/air-max-200-winter-mens-shoe-L6vRs7.jpg",
        "image_url": "https://www.nike.com/t/air-max-200-winter-mens-shoe-L6vRs7/BV5485-008"
    },
    {
        "name": "NikeCourt Air Zoom Prestige\nNikeCourt Air Zoom Prestige\nMen's Tennis Shoe\n3 Colors\n$89.97\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dqxykzcspsycvtdrfrgn/nikecourt-air-zoom-prestige-mens-tennis-shoe-vY8981.jpg",
        "image_url": "https://www.nike.com/t/nikecourt-air-zoom-prestige-mens-tennis-shoe-vY8981/AA8020-105"
    },
    {
        "name": "Nike SFB Field 2 8”\nNike SFB Field 2 8”\nTactical Boot\n3 Colors\n$135.97\n$170",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/tuucmms4vbstwypmdu2h/sfb-field-2-8-tactical-boot-gkRtlh.jpg",
        "image_url": "https://www.nike.com/t/sfb-field-2-8-tactical-boot-gkRtlh/AO7507-001"
    },
    {
        "name": "Nike Joyride CC\nNike Joyride CC\nMen's Shoe\n8 Colors\n$85.97\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/nge6um3oejzzuvgtvkk1/joyride-cc-mens-shoe-7pfVQF.jpg",
        "image_url": "https://www.nike.com/t/joyride-cc-mens-shoe-7pfVQF/AO1742-400"
    },
    {
        "name": "Nike Air Zoom Pegasus 36 By You\nNike Air Zoom Pegasus 36 By You\nMen's Running Shoe\n7 Colors\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dulvuvp2bkoiebw6oiim/custom-nike-air-zoom-pegasus-36-premium-shoe-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-zoom-pegasus-36-premium-shoe-by-you-10000718/461773380"
    },
    {
        "name": "Nike Air Max 720 By You\nNike Air Max 720 By You\nMen's Shoe\n7 Colors\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/h57zsitxsr31qnhtoeiw/custom-nike-air-max-720-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-max-720-by-you-10000601/913011435"
    },
    {
        "name": "LeBron XVI Low\nLeBron XVI Low\nMen's Basketball Shoe\n1 Color\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/mrq1xkbfq9jmgtz7eit4/lebron-xvi-low-mens-basketball-shoe-7hNB58.jpg",
        "image_url": "https://www.nike.com/t/lebron-xvi-low-mens-basketball-shoe-7hNB58/CK2168-600"
    },
    {
        "name": "Nike Janoski G\nNike Janoski G\nMen's Golf Shoe\n7 Colors\n$79.97\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dhu82e2txcwgy8om8gdh/janoski-g-mens-golf-shoe-trQzc9.jpg",
        "image_url": "https://www.nike.com/t/janoski-g-mens-golf-shoe-trQzc9/AT4967-101"
    },
    {
        "name": "Nike Vapor Edge Elite 360 Premium\nNike Vapor Edge Elite 360 Premium\nMen's Football Cleat\n1 Color\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-16ef8593-a75e-43a7-bcd5-2c053e56398e/vapor-edge-elite-360-premium-mens-football-cleat-JCK95N.jpg",
        "image_url": "https://www.nike.com/t/vapor-edge-elite-360-premium-mens-football-cleat-JCK95N/CI5635-100"
    },
    {
        "name": "Nike Air Max 720 Horizon\nNike Air Max 720 Horizon\nMen's Shoe\n4 Colors\n$180.97\n$240",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3259990a-be12-4de5-a1cb-25ed9271003c/air-max-720-horizon-mens-shoe-bcnhJZ.jpg",
        "image_url": "https://www.nike.com/t/air-max-720-horizon-mens-shoe-bcnhJZ/BQ5808-001"
    },
    {
        "name": "Nike Blazer Mid By You\nNike Blazer Mid By You\nMen's Shoe\n7 Colors\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/mrxqdrj5uqenang6xgnn/custom-nike-blazer-mid-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-blazer-mid-by-you-10000638/1076247329"
    },
    {
        "name": "Nike Free X Metcon 2 (Texas)\nNike Free X Metcon 2 (Texas)\nMen's Training Shoe\n1 Color\n$96.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3ae3dc46-3278-4533-88e6-81a3b311d23d/free-x-metcon-2-texas-mens-training-shoe-R30Gfg.jpg",
        "image_url": "https://www.nike.com/t/free-x-metcon-2-texas-mens-training-shoe-R30Gfg/CQ8691-001"
    },
    {
        "name": "Nike Air Max Plus\nNike Air Max Plus\nMen's Shoe\n3 Colors\n$160",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/pbrlzpialqmsvojhbbjb/air-max-plus-mens-shoe-bkoyv8.jpg",
        "image_url": "https://www.nike.com/t/air-max-plus-mens-shoe-bkoyv8/852630-021"
    },
    {
        "name": "Nike ISPA Joyride Envelope\nNike ISPA Joyride Envelope\nShoe\n2 Colors\n$150.97\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a8a51585-82fd-495b-8a5f-13fcef1391ac/ispa-joyride-envelope-shoe-V1TlfG.jpg",
        "image_url": "https://www.nike.com/t/ispa-joyride-envelope-shoe-V1TlfG/BV4584-001"
    },
    {
        "name": "Nike React Element 55\nNike React Element 55\nMen's Shoe\n6 Colors\n$73.97\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/swwyw2ikc4fqmxdb3tri/react-element-55-mens-shoe-68CDfV.jpg",
        "image_url": "https://www.nike.com/t/react-element-55-mens-shoe-68CDfV/BQ6166-403"
    },
    {
        "name": "Nike Alpha Huarache 7 Pro\nNike Alpha Huarache 7 Pro\nLacrosse Cleat\n4 Colors\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ohft6auu2qdbiteitu1q/alpha-huarache-7-pro-lacrosse-cleat-sQKVJW.jpg",
        "image_url": "https://www.nike.com/t/alpha-huarache-7-pro-lacrosse-cleat-sQKVJW/CJ0265-100"
    },
    {
        "name": "Nike Air Zoom Wildhorse 5\nNike Air Zoom Wildhorse 5\nMen's Trail Running Shoe\n5 Colors\n$87.97\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/qih4j5x1vadzsynlhsv2/air-zoom-wildhorse-5-mens-trail-running-shoe-lMslPS.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-wildhorse-5-mens-trail-running-shoe-lMslPS/AQ2222-600"
    },
    {
        "name": "Nike Mercurial Vapor 13 Academy MG\nNike Mercurial Vapor 13 Academy MG\nMulti-Ground Soccer Cleat\n3 Colors\n$80",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5c7cac0b-e68b-44ec-9175-acdf1e124be6/mercurial-vapor-13-academy-mg-multi-ground-soccer-cleat-6615Ls.jpg",
        "image_url": "https://www.nike.com/t/mercurial-vapor-13-academy-mg-multi-ground-soccer-cleat-6615Ls/AT5269-606"
    },
    {
        "name": "Nike Shox NZ EU\nNike Shox NZ EU\nMen's Shoe\n2 Colors\n$100.97\n$125",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/rzv4bb39awq30mfy4vcz/shox-nz-eu-mens-shoe-VrTWYjqD.jpg",
        "image_url": "https://www.nike.com/t/shox-nz-eu-mens-shoe-VrTWYjqD/501524-091"
    },
    {
        "name": "Nike Mercurial Vapor 13 Elite MDS FG\nNike Mercurial Vapor 13 Elite MDS FG\nFirm-Ground Soccer Cleat\n2 Colors\n$222.97\n$270",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/oxopfjyojtekcr9gdyym/mercurial-vapor-13-elite-mds-fg-firm-ground-soccer-cleat-h6qCNK.jpg",
        "image_url": "https://www.nike.com/t/mercurial-vapor-13-elite-mds-fg-firm-ground-soccer-cleat-h6qCNK/CJ1295-401"
    },
    {
        "name": "Nike Vapor Ultrafly 2 Keystone\nNike Vapor Ultrafly 2 Keystone\nMen's Baseball Cleat\n1 Color\n$40",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cwvcuiudools3kjhpujd/vapor-ultrafly-2-keystone-mens-baseball-cleat-77L7DF.jpg",
        "image_url": "https://www.nike.com/t/vapor-ultrafly-2-keystone-mens-baseball-cleat-77L7DF/AO7945-003"
    },
    {
        "name": "Nike Phantom Venom Academy FG\nNike Phantom Venom Academy FG\nFirm-Ground Soccer Cleat\n6 Colors\n$60.97\n$80",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/db942b38-8a8a-4b13-85c1-0c34dfea1c60/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
        "image_url": "https://www.nike.com/t/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll/AO0566-606"
    },
    {
        "name": "Nike Air Max Tailwind IV\nNike Air Max Tailwind IV\nMen's Shoe\n4 Colors\n$120.97\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/wyntsbkwjqqyjy9dv7m7/air-max-tailwind-iv-mens-shoe-KvQW5V.jpg",
        "image_url": "https://www.nike.com/t/air-max-tailwind-iv-mens-shoe-KvQW5V/CD0456-600"
    },
    {
        "name": "LeBron Witness 4\nLeBron Witness 4\nBasketball Shoe\n9 Colors\n$100",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/678390ab-535c-4e03-8b58-d86122fdc2cd/lebron-witness-4-basketball-shoe-7zfgGM.jpg",
        "image_url": "https://www.nike.com/t/lebron-witness-4-basketball-shoe-7zfgGM/BV7427-101"
    },
    {
        "name": "Nike Air Monarch IV\nNike Air Monarch IV\nLifestyle/Gym Shoe\n9 Colors\n$57.97\n$70",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zdrgp3gfr1cauqgzlfya/air-monarch-iv-lifestyle-gym-shoe-lPtRrS.jpg",
        "image_url": "https://www.nike.com/t/air-monarch-iv-lifestyle-gym-shoe-lPtRrS/415445-001"
    },
    {
        "name": "Kyrie Flytrap 3\nKyrie Flytrap 3\nBasketball Shoe\n8 Colors\n$80",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-b21baa41-ec9d-4527-82f9-dad2f263ab5f/kyrie-flytrap-3-basketball-shoe-98K5l5.jpg",
        "image_url": "https://www.nike.com/t/kyrie-flytrap-3-basketball-shoe-98K5l5/BQ3060-400"
    },
    {
        "name": "Nike Phantom Venom Pro FG\nNike Phantom Venom Pro FG\nFirm-Ground Soccer Cleat\n6 Colors\n$102.97\n$120",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7f1de107-a4d9-4315-823f-f6e1aeed7afd/phantom-venom-pro-fg-firm-ground-soccer-cleat-NbRx6N.jpg",
        "image_url": "https://www.nike.com/t/phantom-venom-pro-fg-firm-ground-soccer-cleat-NbRx6N/AO8738-010"
    },
    {
        "name": "Nike Alpha Menace Varsity 2\nNike Alpha Menace Varsity 2\nMen's Football Cleat\n3 Colors\n$59.97\n$75",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-883094fc-b1b9-43b7-936a-a5ca0b3fbbf7/alpha-menace-varsity-2-mens-football-cleat-hQ3czn.jpg",
        "image_url": "https://www.nike.com/t/alpha-menace-varsity-2-mens-football-cleat-hQ3czn/AQ8154-601"
    },
    {
        "name": "Kyrie Flytrap II\nKyrie Flytrap II\nBasketball Shoe\n1 Color\n$67.97\n$80",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ajbrcrfl8uuyc0nomnxm/kyrie-flytrap-ii-basketball-shoe-W0jj9G.jpg",
        "image_url": "https://www.nike.com/t/kyrie-flytrap-ii-basketball-shoe-W0jj9G/AO4436-001"
    },
    {
        "name": "Nike Joyride CC3 Setter\nNike Joyride CC3 Setter\nMen's Shoe\n4 Colors\n$123.97\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/by35zaaobmeqi1uxybgy/joyride-cc3-setter-mens-shoe-WW6qfW.jpg",
        "image_url": "https://www.nike.com/t/joyride-cc3-setter-mens-shoe-WW6qfW/AT6395-002"
    },
    {
        "name": "PG 3 (Team)\nPG 3 (Team)\nBasketball Shoe\n3 Colors\n$61.97\n$110",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/pvdk1g7huzvigiyaswse/pg-3-team-basketball-shoe-r2BqVr.jpg",
        "image_url": "https://www.nike.com/t/pg-3-team-basketball-shoe-r2BqVr/CN9512-601"
    },
    {
        "name": "Nike Air Force 1 Type\nNike Air Force 1 Type\nMen's Shoe\n1 Color\n$140",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/79b16385-73c9-4793-8178-2141d2993c69/air-force-1-type-mens-shoe-6m7Rzn.jpg",
        "image_url": "https://www.nike.com/t/air-force-1-type-mens-shoe-6m7Rzn/CQ2344-100"
    },
    {
        "name": "Nike Air Zoom Pegasus 36 Shield By You\nNike Air Zoom Pegasus 36 Shield By You\nMen's Running Shoe\n4 Colors\n$150",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/mj142kku6a79cpjpvjkc/custom-nike-air-zoom-pegasus-36-shield-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-nike-air-zoom-pegasus-36-shield-by-you-10000708/766124681"
    },
    {
        "name": "Jordan Why Not? Zer0.3\nJordan Why Not? Zer0.3\nBasketball Shoe\n4 Colors\n$130",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/db552983-dec0-4003-9d59-aca4d2714bfa/jordan-why-not-zer03-basketball-shoe-LJCLGj.jpg",
        "image_url": "https://www.nike.com/t/jordan-why-not-zer03-basketball-shoe-LJCLGj/CD3003-100"
    },
    {
        "name": "Jordan 1 TD Low\nJordan 1 TD Low\nMen's Football Cleat\n1 Color\n$68.97\n$115",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/quecplj18vkwvehxkaci/jordan-1-td-low-mens-football-cleat-Jl59tr.jpg",
        "image_url": "https://www.nike.com/t/jordan-1-td-low-mens-football-cleat-Jl59tr/AV5292-002"
    },
    {
        "name": "Nike Air Zoom Victory Tour\nNike Air Zoom Victory Tour\nMen's Golf Shoe\n4 Colors\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/o8mqj4ozzg9khkjfg17m/air-zoom-victory-tour-mens-golf-shoe-pwTh12.jpg",
        "image_url": "https://www.nike.com/t/air-zoom-victory-tour-mens-golf-shoe-pwTh12/AQ1479-001"
    },
    {
        "name": "Kyrie 6 By You\nKyrie 6 By You\nBasketball Shoe\n8 Colors\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d6e338c6-fe5f-43df-b07c-5cb2b4bc77e2/custom-kyrie-6-by-you.jpg",
        "image_url": "https://www.nike.com/u/custom-kyrie-6-by-you-10000745/158576409"
    },
    {
        "name": "Nike Air Max Tailwind IV\nNike Air Max Tailwind IV\nMen's Shoe\n5 Colors\n$89.97\n$160",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/seapgn9zqkfmos0eccix/air-max-tailwind-iv-mens-shoe-75BhCZ.jpg",
        "image_url": "https://www.nike.com/t/air-max-tailwind-iv-mens-shoe-75BhCZ/AQ2567-105"
    },
    {
        "name": "Nike Odyssey React\nNike Odyssey React\nMen's Running Shoe\n1 Color\n$99.97\n$120",
        "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d2zpfhsvtgjde4sjfogp/odyssey-react-mens-running-shoe-ODEY0A.jpg",
        "image_url": "https://www.nike.com/t/odyssey-react-mens-running-shoe-ODEY0A/AO9819-010"
    },
    {
        "name": "Nike Air Max 97\nNike Air Max 97\nMen's Shoe\n1 Color\n$180",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/53213863-1aab-410d-9eef-ef73d3706f96/air-max-97-mens-shoe-w3PbFM.jpg",
        "image_url": "https://www.nike.com/t/air-max-97-mens-shoe-w3PbFM/CU4731-100"
    },
    {
        "name": "Jordan Proto-Max 720\nJordan Proto-Max 720\nShoe\n6 Colors\n$133.97\n$200",
        "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/aid3xwtljoqzn58s8nin/jordan-proto-max-720-shoe-Q7lZLh.jpg",
        "image_url": "https://www.nike.com/t/jordan-proto-max-720-shoe-Q7lZLh/BQ6623-007"
    }
];


var collections = ['Air',
    'Nike',
    'Running',
    'Run',
    'Training',
    'Men',
    'Air Max',
    'Jordan',
    'Jordan 3',
    'Jordan 3 Retro',
    'Adapt',
    'Adapt BB',
    'Air Force',
    'Air Force 1',
    'Air Force 1 Low',
    'Air Force 1 Low Black',
    'Air Force 1 Low Black History',
    'Air Max 95',
    'Air Max 95 Black',
    'Air Max 95 Black History',
    'React',
    'React Infinity',
    'React Infinity Run',
    'Air Zoom',
    'Air Max 270',
    'Air Force 1 \'07',
    'Air Max 270 React',
    'Air Max 90',
    'Air VaporMax',
    'Jordan 1',
    'Jordan 1 Retro',
    'Jordan 1 Retro High',
    'Renew',
    'Air Zoom Pegasus',
    '6',
    '17',
    '17 I',
    'Freak',
    'Freak 1',
    'Freak 1 Employee',
    'Freak 1 Employee of',
    'Freak 1 Employee of the',
    '4',
    '4 Gatorade',
    'Air Max 720',
    '7',
    'Zoom',
    'Zoom KD12',
    'Zoom KD12 Don',
    'Blazer',
    'Blazer Mid',
    'Blazer Mid \'77',
    'Killshot',
    'Killshot 2',
    'Air VaporMax Flyknit',
    'x',
    'x Undercover',
    'x Undercover React',
    'React Presto',
    'Tech',
    'Tech Challenge',
    'Air Max 1',
    'Air Max 1 DNA',
    'Air Max 1 DNA Ch.',
    'Air Huarache',
    'Air Huarache Run',
    'Air Huarache Run DNA',
    'Air Huarache Run DNA Ch.',
    'Jordan 1 Mid',
    'Zoom Pegasus',
    'Zoom Pegasus Turbo',
    'Air Zoom Pegasus 36',
    'Joyride',
    'Joyride Dual',
    'Jordan 6',
    'Air Max Plus',
    'Air Force 1 Winter',
    'React-Type',
    'Freak 1 Soul',
    'Air Zoom 85',
    'Joyride Run',
    'Air Max 270 Special',
    'x Undercover Air',
    'x Undercover Air Max',
    'Vaporfly',
    'Vaporfly 4%',
    'Free',
    'Free X',
    'Free X Metcon',
    'Metcon',
    'Air Flight',
    'Epic',
    'Epic React',
    'Epic React Flyknit',
    'SB',
    'SB Zoom',
    'SB Zoom Stefan',
    'SB Zoom Stefan Janoski',
    'SB Zoom Stefan Janoski Mid',
    'Mercurial',
    'Mercurial Vapor',
    'Mercurial Vapor 13',
    'Mercurial Vapor 13 Elite',
    'SB Zoom Stefan Janoski RM',
    'Revolution',
    'Drop',
    'Drop Type',
    'Flex',
    'Flex Control',
    'Benassi',
    'Benassi JDI',
    'Benassi JDI Fanny',
    'Flytrap',
    'Air Max Vapor',
    'Air Max Vapor Wing',
    'Air Max Axis',
    'Shox',
    'Air Max Motion',
    'Air Zoom Vapor',
    'Air Force 1 High',
    'Air Force 1 High By',
    'Free TR',
    'Vapor',
    'Vapor Untouchable',
    'Vapor Untouchable 3',
    'Alpha',
    'Alpha Huarache',
    'Alpha Huarache Elite',
    'Alpha Huarache Elite 2',
    'Drop-Type',
    'Vapor X',
    'Vapor X TC',
    'Air Ghost',
    '4 By',
    '4 By You',
    '4 By You (All',
    'Free RN',
    'Air Max Alpha',
    'Zoom Rize',
    'Air Max 200',
    'Air Max 200 By',
    'Epic Phantom',
    'Epic Phantom React',
    'Epic Phantom React A.I.R.',
    'Epic Phantom React A.I.R. Cody',
    'Air Zoom Vomero',
    'Zoom Rival',
    'Zoom Rival M',
    'Zoom Pegasus Turbo 2',
    'Zoom Pegasus Turbo 2 Shield',
    'Zoom Pegasus Turbo 2 Shield Low',
    'Zoom Pegasus Turbo 2 Shield Low By',
    'SFB',
    'SFB Field',
    'SFB Field 2',
    'Air Max2'];

var formatted = rawData.forEach((shoe) => {
    shoe.name = shoe.name.split('\n');
    var shoeName = shoe.name[0];
    var arr = [];
    collections.forEach((collection) => {
        if (shoeName.includes(collection)) {
            arr.push(collection);
        }
    })
    shoe.collection = arr;
})


// Format JSON object
var JSONformat = rawData.map((shoe) => (
    {
        item: shoe.name[0],
        type: shoe.name[2],
        price: shoe.name[4],
        image: shoe.image,
        collections: shoe.collection
    }
))

module.exports = JSONformat;

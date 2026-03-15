export interface WorkMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface WorkProject {
  slug: string;
  title: string;
  order: number;
  medium?: string;
  publication?: string;
  coverImage: string;
  indexSummary: string;
  detailSummary: string;
  processBody: string[];
  gallery: WorkMedia[];
  processGallery: WorkMedia[];
}

export const workProjects: WorkProject[] = [
  {
    slug: 'the-wagner',
    title: 'The Wagner',
    order: 1,
    medium: 'Identity',
    publication: 'The Wagner Free Institute of Science',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b3f40837-9658-4fa3-b29f-0fe56980bb88_rwc_353x242x1214x949x640.png?h=b9c54b52439da294de1dca3662682ad1',
    indexSummary:
      'The Wagner Free Institute of Science is a natural history museum at 1700 West Montgomery Avenue in north Philadelphia, Pennsylvania, United States. Founded in 1855, it is a rare surviving example of a Victorian-era scientific society, with a museum, research center, library, and educational facilities.',
    detailSummary:
      'The Wagner Free Institute of Science is a natural history museum at 1700 West Montgomery Avenue in north Philadelphia, Pennsylvania, United States. Founded in 1855, it is a rare surviving example of a Victorian-era scientific society, with a museum, research center, library, and educational facilities.',
    processBody: [
      'The Wagner Free Institute of Science is a natural history museum at 1700 West Montgomery Avenue in north Philadelphia, Pennsylvania, United States. Founded in 1855, it is a rare surviving example of a Victorian-era scientific society, with a museum, research center, library, and educational facilities.',
      'To craft a bold, modern identity that resonates across digital and physical platforms while preserving the elegance of the physical site. The new branding emphasizes clean, contemporary lines, a sophisticated color palette, and typography that conveys authority and style.',
      'Ensuring seamless integration by implementing consistent visual elements across the website, social media, print materials, etc.',
    ],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/8a814ff7-e501-4a6f-a97f-d1ed2a541c41_rw_600.png?h=db4095208f18a06e7bf0de859b3ae09e', alt: 'The Wagner image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/8b9ea26a-26e6-4a50-a50f-853d47b39316_rw_600.png?h=e5a40b5e928ada1510e840ab7c7ccdd2', alt: 'The Wagner image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b8813e0e-e3bf-4c9f-8e10-d9ad9357ced9_rw_600.png?h=68a452fe03e87125b7bf71104e0acb82', alt: 'The Wagner image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/97f9e247-2b60-4971-8957-92ead6e2e7b8_rw_600.png?h=e07a2dc01184cdb542fd6b75b159cc91', alt: 'The Wagner image 4' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/486b43d9-247c-4972-8d0f-d769074a81c6_rw_600.png?h=29f1a7731b32a6b538f52fc3bf27a737', alt: 'The Wagner image 5' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b791969d-dc44-4e96-ab18-9e9bf8f74157_rw_600.png?h=0008ecf4bdac5f92a96bab3f92fcf817', alt: 'The Wagner image 6' },
    ],
    processGallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/8b9ea26a-26e6-4a50-a50f-853d47b39316_rw_600.png?h=e5a40b5e928ada1510e840ab7c7ccdd2', alt: 'The Wagner process image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b8813e0e-e3bf-4c9f-8e10-d9ad9357ced9_rw_600.png?h=68a452fe03e87125b7bf71104e0acb82', alt: 'The Wagner process image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/97f9e247-2b60-4971-8957-92ead6e2e7b8_rw_600.png?h=e07a2dc01184cdb542fd6b75b159cc91', alt: 'The Wagner process image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/486b43d9-247c-4972-8d0f-d769074a81c6_rw_600.png?h=29f1a7731b32a6b538f52fc3bf27a737', alt: 'The Wagner process image 4' },
    ],
  },
  {
    slug: 'herring',
    title: 'Herring',
    order: 2,
    medium: 'Editorial',
    publication: 'Weekly Magazine Concept',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/c0aecb9b-e362-4f2a-90ed-79136a3a850b_rwc_205x130x1508x1179x640.png?h=d577e748d4c13e5bc3b36066591b09a7',
    indexSummary:
      'Herring is a weekly magazine that delivers satirical takes on current events, trends, and social issues, offering readers a fresh perspective on the often chaotic world around them.',
    detailSummary:
      'Herring is a weekly magazine that delivers satirical takes on current events, trends, and social issues, offering readers a fresh perspective on the often chaotic world around them.',
    processBody: [
      'Herring is a weekly magazine that delivers satirical takes on current events, trends, and social issues, offering readers a fresh perspective on the often chaotic world around them.',
      'The magazine takes its name from the classic "red herring" because it pokes fun at the diversions that keep society entertained, while slyly reminding readers not to take everything at face value.',
    ],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/860ee2ca-96d6-4478-a3ff-fb4a8b8803f5_rw_1920.png?h=60dc67916dd6a5ba55386577077d5e80', alt: 'Herring image 1' },
    ],
    processGallery: [],
  },
  {
    slug: 'mount-cuba-center',
    title: 'Mount Cuba Center',
    order: 3,
    medium: 'Identity',
    publication: 'Mount Cuba Center',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/6cf46a3b-3456-4249-847b-df81881c5ae2_rwc_548x488x826x646x640.png?h=80628549621437bfadae48875be750d0',
    indexSummary:
      'Initial Sketches: Developed several logo concepts, focusing on symbols of nature like leaves, native plants, or ecological cycles.',
    detailSummary:
      'Initial Sketches: Developed several logo concepts, focusing on symbols of nature like leaves, native plants, or ecological cycles.',
    processBody: [
      'Initial Sketches: Developed several logo concepts, focusing on symbols of nature like leaves, native plants, or ecological cycles.',
      'Typography: Fonts that balance elegance with accessibility. A serif typeface might convey tradition and trust, while a clean sans-serif font can communicate modernity and environmental focus.',
      'Refinement: Refine the selected logo concept to be scalable, timeless, and versatile, ensuring it works across digital platforms, print materials, and signage.',
    ],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/35b684b9-311b-4378-b8a9-bab925573509_rw_1920.png?h=fccafa5bd8d7c26ee5c9b1923d4373b2', alt: 'Mount Cuba Center image 1' },
    ],
    processGallery: [],
  },
  {
    slug: 'rated-raw',
    title: 'Rated Raw',
    order: 4,
    medium: 'Digital',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/307e2b5a-0d32-4912-aaf7-517bd61efbcc_rwc_412x0x1092x854x640.gif?h=46f8dbfe9e1124dd1f97967ac8e8aa95',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/307e2b5a-0d32-4912-aaf7-517bd61efbcc_rwc_412x0x1092x854x640.gif?h=46f8dbfe9e1124dd1f97967ac8e8aa95', alt: 'Rated Raw image 1' },
    ],
    processGallery: [],
  },
  {
    slug: 'typography',
    title: 'Typography',
    order: 5,
    medium: 'Type Study',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/d8d1cd18-7f9c-462e-b79b-f36f797e127b_rwc_41x0x1841x1440x640.png?h=312fe734031f1a7047e28a16f93c1667',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/12472ff0-15ed-4efb-9806-8b4f59cb4ce9_rw_1920.png?h=779f8641f01e722c08db868a5304603a', alt: 'Typography image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/7f2d4e37-e8ee-4d24-a7da-31d8a7dc0e3e_rw_600.png?h=9845f2c834b03107072bad5c8f906042', alt: 'Typography image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/add017f9-4a22-4301-96ff-612df9cec527_rw_600.png?h=1f59d87e0ff9511832507cd582cbfdbf', alt: 'Typography image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b9502367-5519-4aa4-9d45-0883df4a3c20_rw_600.png?h=f71f277e0b7cc80ff2baa236b0fb06bf', alt: 'Typography image 4' },
    ],
    processGallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/7f2d4e37-e8ee-4d24-a7da-31d8a7dc0e3e_rw_600.png?h=9845f2c834b03107072bad5c8f906042', alt: 'Typography process image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/add017f9-4a22-4301-96ff-612df9cec527_rw_600.png?h=1f59d87e0ff9511832507cd582cbfdbf', alt: 'Typography process image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b9502367-5519-4aa4-9d45-0883df4a3c20_rw_600.png?h=f71f277e0b7cc80ff2baa236b0fb06bf', alt: 'Typography process image 3' },
    ],
  },
  {
    slug: 'radiohead',
    title: 'Radiohead',
    order: 6,
    medium: 'Motion',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b824b85d-8a2e-43bd-8706-8cf8e488a6e5_rwc_73x160x769x601x640.GIF?h=6b4baf48d70bd389001ed5779ca5424f',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/98655396-fc64-4911-8c9d-f012b33bede6_rw_1920.png?h=591f6fffe0f5a9d1f7dd79937f9cb6cd', alt: 'Radiohead image 1' },
    ],
    processGallery: [],
  },
  {
    slug: 'woodwork',
    title: 'Woodwork',
    order: 7,
    medium: 'Object',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/6675bfbc-da26-4794-aefd-c2d99f3920a7_rwc_1684x1817x1328x1038x640.jpg?h=e4d4480d573b60a0c34038cb87dbb213',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/4cd85610-8d00-4d51-8268-3a49593e3146_rw_600.jpg?h=4782cab7ef2242a72dc83eb15d810ba4', alt: 'Woodwork image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/5e1695e7-c3d9-4244-b5ca-807f90cae3ef_rw_600.jpg?h=dc2fd655525ce0429bcf991520152fa5', alt: 'Woodwork image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/21347690-7718-4fb1-97c4-a884249b4a07_rw_600.jpg?h=a3b94cec119fdfb180fbc46307972db1', alt: 'Woodwork image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/803bee5d-f0d0-4edc-81aa-906c09ac9c1a_rw_600.jpg?h=aba1b2342ef14ce1632ce62d1e9f49f7', alt: 'Woodwork image 4' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/7c455b51-41ce-4271-bcc8-7664c1321854_rw_600.jpg?h=e105e8ea354f25bdbe1ee7336eb311e9', alt: 'Woodwork image 5' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/cd5a3f55-37bb-4e1f-9d24-2b48e778ecf5_rw_600.jpg?h=f485d5cc48f527575cc6253ba05d4583', alt: 'Woodwork image 6' },
    ],
    processGallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/5e1695e7-c3d9-4244-b5ca-807f90cae3ef_rw_600.jpg?h=dc2fd655525ce0429bcf991520152fa5', alt: 'Woodwork process image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/21347690-7718-4fb1-97c4-a884249b4a07_rw_600.jpg?h=a3b94cec119fdfb180fbc46307972db1', alt: 'Woodwork process image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/803bee5d-f0d0-4edc-81aa-906c09ac9c1a_rw_600.jpg?h=aba1b2342ef14ce1632ce62d1e9f49f7', alt: 'Woodwork process image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/7c455b51-41ce-4271-bcc8-7664c1321854_rw_600.jpg?h=e105e8ea354f25bdbe1ee7336eb311e9', alt: 'Woodwork process image 4' },
    ],
  },
  {
    slug: 'rain-can',
    title: 'Rain Can',
    order: 8,
    medium: 'Object',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/189dc81a-2a79-4820-99a6-0b27f7ac1628_rwc_0x182x1179x921x640.jpg?h=0dede9a43170f1b2c3ceb8dfb27d3b11',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/189dc81a-2a79-4820-99a6-0b27f7ac1628_rwc_0x182x1179x921x640.jpg?h=0dede9a43170f1b2c3ceb8dfb27d3b11', alt: 'Rain Can image 1' },
    ],
    processGallery: [],
  },
  {
    slug: 'areia',
    title: 'Areia',
    order: 9,
    medium: 'Material Study',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/365f0056-e873-4e49-a6ba-2690ba2d8c98_rwc_282x0x3274x2560x640.jpg?h=87501bae7c9404e74d837d743582f677',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/521b8262-cc4f-492f-8744-52abe8775226_rw_600.JPG?h=5cf115699961a92397eba1305ac5149f', alt: 'Areia image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b76abe86-ca40-4f44-980d-c0b64c99cbf7_rw_600.JPG?h=9ee971c1424e4eb74bd13dd25c0e9186', alt: 'Areia image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/0858cb0e-f1e3-41ba-8fb4-dc7e56a2e0d7_rw_600.JPG?h=18978b5390f5ffb3c61d57c1f6c77db4', alt: 'Areia image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/848427b5-608e-4c05-8b16-840deef66c10_rw_600.JPG?h=64e780126bf8bd5b9c367a8ae9293456', alt: 'Areia image 4' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/532935e7-e510-471e-8eb0-89f6a6778201_rw_600.JPG?h=3b5f921e05084676ccbf7fd8831806d7', alt: 'Areia image 5' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/62acbce5-bae8-497c-8a3a-93ff7fc3b9af_rw_600.JPG?h=b2ea3c8ec2b65059014d653cd38a4b61', alt: 'Areia image 6' },
    ],
    processGallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/b76abe86-ca40-4f44-980d-c0b64c99cbf7_rw_600.JPG?h=9ee971c1424e4eb74bd13dd25c0e9186', alt: 'Areia process image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/0858cb0e-f1e3-41ba-8fb4-dc7e56a2e0d7_rw_600.JPG?h=18978b5390f5ffb3c61d57c1f6c77db4', alt: 'Areia process image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/848427b5-608e-4c05-8b16-840deef66c10_rw_600.JPG?h=64e780126bf8bd5b9c367a8ae9293456', alt: 'Areia process image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/532935e7-e510-471e-8eb0-89f6a6778201_rw_600.JPG?h=3b5f921e05084676ccbf7fd8831806d7', alt: 'Areia process image 4' },
    ],
  },
  {
    slug: 'film-photography',
    title: 'Cityscapes',
    order: 10,
    medium: 'Photography',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/4cea0b04-adac-4573-abfe-8913c238f52a_rwc_261x0x2872x2246x640.jpg?h=875be17ca9fcb59ad0de6b08435a5756',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/28645330-577b-483d-bc07-24b9bbadc290_rw_1920.jpg?h=20407d194003bc691a3e485c3f5993fa', alt: 'Cityscapes image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/cdd5347f-135d-486f-9bb3-ac81d8beba4b_rw_1920.jpg?h=c08c578824146cfedc193247fc453768', alt: 'Cityscapes image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/98cba337-69db-447c-a636-5b2fb0d8e929_rw_1920.jpg?h=aeae7dbbcc65e2c3b8d42fa3e0bd5a81', alt: 'Cityscapes image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/2e082a66-ff76-4f6b-8800-d6a69b231b9b_rw_1920.jpg?h=f92fb8e8140938268afe409d12eacfe1', alt: 'Cityscapes image 4' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/74873209-7a97-4cda-830c-c83b7372e7bd_rw_1920.jpg?h=570b2386378f303686990cbb1b13810c', alt: 'Cityscapes image 5' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/181f74f9-3c00-450d-b988-059c4d8c785e_rw_1920.jpg?h=814a80b4ae615e33d869c989bcd2426e', alt: 'Cityscapes image 6' },
    ],
    processGallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/cdd5347f-135d-486f-9bb3-ac81d8beba4b_rw_1920.jpg?h=c08c578824146cfedc193247fc453768', alt: 'Cityscapes process image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/98cba337-69db-447c-a636-5b2fb0d8e929_rw_1920.jpg?h=aeae7dbbcc65e2c3b8d42fa3e0bd5a81', alt: 'Cityscapes process image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/2e082a66-ff76-4f6b-8800-d6a69b231b9b_rw_1920.jpg?h=f92fb8e8140938268afe409d12eacfe1', alt: 'Cityscapes process image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/74873209-7a97-4cda-830c-c83b7372e7bd_rw_1920.jpg?h=570b2386378f303686990cbb1b13810c', alt: 'Cityscapes process image 4' },
    ],
  },
  {
    slug: 'photography',
    title: 'Photography',
    order: 11,
    medium: 'Photography',
    coverImage:
      'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/d0d549dd-c0ac-455f-8029-a52a83744c1a_rwc_282x0x3274x2560x640.jpg?h=a77b4f36a48c50fad7bf37940a0e69ce',
    indexSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    detailSummary: 'This project is currently presented primarily as a visual gallery on the source portfolio.',
    processBody: ['This project is currently presented primarily as a visual gallery on the source portfolio.'],
    gallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/f59bdfb8-44a1-4dc1-a3d2-d84fd6d9b2b0_rw_600.jpeg?h=300d51d6f8dbd5c004c219728e942a51', alt: 'Photography image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/4e32c5d5-6fc1-48f5-9ff2-58c5f673c023_rw_600.jpeg?h=c28f24763f359b557d46745134fabac0', alt: 'Photography image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/55187cef-7341-4f8d-bea0-6e2848bebe74_rw_600.jpeg?h=d903616c574f23428a2fce93b9d5c187', alt: 'Photography image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/30d82e5e-671c-40c0-8bb8-8c624c094550_rw_600.jpeg?h=5705f7acf2e5dc5503e6fedee5e68ccb', alt: 'Photography image 4' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/82d46f5c-faaa-460e-a440-c86df77793ce_rw_600.jpeg?h=4d1c616c9917cf502455fd65101171ef', alt: 'Photography image 5' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/720f7770-b625-4422-83d5-7057e0acb028_rw_600.jpg?h=b5cda831e13efee6cf00cec5b9c1b786', alt: 'Photography image 6' },
    ],
    processGallery: [
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/4e32c5d5-6fc1-48f5-9ff2-58c5f673c023_rw_600.jpeg?h=c28f24763f359b557d46745134fabac0', alt: 'Photography process image 1' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/55187cef-7341-4f8d-bea0-6e2848bebe74_rw_600.jpeg?h=d903616c574f23428a2fce93b9d5c187', alt: 'Photography process image 2' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/30d82e5e-671c-40c0-8bb8-8c624c094550_rw_600.jpeg?h=5705f7acf2e5dc5503e6fedee5e68ccb', alt: 'Photography process image 3' },
      { src: 'https://cdn.myportfolio.com/a12712b1-60ad-4da5-ac66-6bede699ad02/82d46f5c-faaa-460e-a440-c86df77793ce_rw_600.jpeg?h=4d1c616c9917cf502455fd65101171ef', alt: 'Photography process image 4' },
    ],
  },
];

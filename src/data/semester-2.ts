import type { Course } from "@/types/reflection";

/**
 * Refleksi Semester 2 PPG Calon Guru.
 * Sesuaikan daftar artefak dengan dokumen yang benar-benar dimiliki.
 */
export const semester2Courses: Course[] = [
  {
    id: "s2-01",
    slug: "pembelajaran-mendalam-asesmen-lanjut",
    title: "Pembelajaran Mendalam dan Asesmen Lanjut",
    semester: 2,
    description: "Pendalaman perencanaan pembelajaran dan penggunaan asesmen untuk memahami perkembangan murid serta menentukan tindak lanjut.",
    connection: "Pengalaman mengajar di kelas X TKJ membuat saya memahami bahwa kegiatan yang menarik belum tentu otomatis menghasilkan pemahaman yang mendalam. Pada materi K3LH, murid dapat menyelesaikan desain rambu, tetapi saya tetap perlu melihat apakah mereka mampu menjelaskan alasan pemilihan simbol, warna, dan lokasi pemasangan. Hal ini mendorong saya menghubungkan tujuan pembelajaran, aktivitas, dan asesmen sejak tahap perencanaan, bukan baru memikirkan penilaian ketika pembelajaran hampir selesai.",
    challenge: "Tantangan yang saya rasakan adalah mengumpulkan bukti pemahaman murid tanpa membuat pembelajaran terlalu padat. Dalam waktu terbatas, saya perlu membagi perhatian antara penjelasan, kerja kelompok, proses pembuatan produk, presentasi, dan umpan balik. Hasil produk juga tidak selalu menunjukkan seluruh proses berpikir murid. Karena itu, saya perlu memilih instrumen sederhana yang benar-benar membantu melihat proses dan hasil belajar.",
    concept: "Saya memahami bahwa asesmen lanjutan bukan sekadar menambah jumlah tes atau rubrik. Asesmen perlu memberi informasi yang dapat digunakan untuk memperbaiki pembelajaran, melalui pertanyaan selama kegiatan, pengamatan proses, penilaian produk, maupun refleksi murid. Pembelajaran mendalam terjadi ketika murid tidak berhenti pada mengingat informasi, tetapi mampu menjelaskan alasan, menghubungkan pengetahuan dengan situasi nyata, menerapkan konsep, dan menilai kembali hasil pekerjaannya.",
    change: "Pada perencanaan berikutnya, saya akan menentukan terlebih dahulu bukti yang menunjukkan bahwa tujuan pembelajaran tercapai. Untuk tugas seperti desain rambu K3 atau analisis proses bisnis, saya akan menggunakan kriteria yang mudah dipahami, misalnya ketepatan konsep, alasan pengambilan keputusan, kesesuaian solusi dengan kebutuhan, dan kemampuan melakukan refleksi. Saya juga akan menyisihkan waktu untuk umpan balik dan perbaikan sehingga asesmen tidak berhenti pada pemberian nilai.",
    practicalReflection: {
      mostMeaningful: "Hal yang paling bermakna adalah menyadari bahwa produk akhir tidak selalu cukup untuk menggambarkan pemahaman murid. Ketika murid membuat rambu K3, saya perlu mengetahui bukan hanya apakah desainnya rapi, tetapi juga apakah pesan keselamatannya tepat dan sesuai dengan potensi bahaya di lokasi yang dipilih.",
      mostRelevantConcept: "Konsep yang paling relevan adalah asesmen sebagai bagian dari proses pembelajaran. Bukti belajar dapat dikumpulkan melalui pertanyaan pemantik, pengamatan diskusi, penjelasan murid, hasil produk, dan refleksi singkat, lalu digunakan untuk menentukan tindak lanjut.",
      teacherPractice: "Saya perlu menyampaikan kriteria keberhasilan sebelum tugas dimulai dan menggunakannya secara konsisten ketika memberi umpan balik. Saya juga perlu memastikan penilaian tetap realistis untuk kelas dengan jumlah murid cukup banyak.",
      exampleApplication: "Pada kegiatan desain rambu K3, murid dapat menuliskan lokasi yang diamati, potensi bahaya, alasan memilih simbol dan warna, serta tindakan yang diharapkan dari pembaca rambu. Penilaian produk dilengkapi pertanyaan singkat saat presentasi agar saya dapat melihat pemahaman di balik desain.",
      intendedChange: "Saya akan lebih terencana menyelaraskan tujuan, aktivitas, dan asesmen. Hasil penilaian akan digunakan untuk menentukan apakah murid membutuhkan contoh tambahan, kesempatan merevisi produk, atau tantangan lanjutan."
    },
    artifacts: [
      "Rancangan atau modul ajar yang mengintegrasikan pembelajaran mendalam dan asesmen",
      "Instrumen asesmen dan rubrik penilaian produk",
      "Contoh hasil kerja murid beserta umpan balik dan refleksi"
    ],
    documents: [
      {
        id: "lk-pmal",
        title: "Lembar Kerja Pembelajaran Mendalam dan Asesmen Lanjut",
        type: "LK",
        description: "Dokumentasi kegiatan dan refleksi tentang pembelajaran mendalam serta penggunaan asesmen untuk menentukan tindak lanjut.",
        semester: 2,
        courseSlug: "pembelajaran-mendalam-asesmen-lanjut",
        url: "/documents/semester-2/LK.PMAL.pdf",
        downloadName: "LK.PMAL.pdf",
        status: "available",
      },
    ],
  },
  {
    id: "s2-02",
    slug: "pembelajaran-sosial-emosional",
    title: "Pembelajaran Sosial Emosional",
    semester: 2,
    description: "Mendalami kesadaran diri, pengelolaan emosi, empati, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab untuk membangun lingkungan belajar positif.",
    connection: "Selama mendampingi pembelajaran praktik di kelas X TKJ, saya melihat bahwa kelancaran kegiatan tidak hanya dipengaruhi penguasaan materi. Cara murid berkomunikasi, menerima pendapat, membagi tugas, dan merespons kesulitan juga memengaruhi kerja kelompok. Dalam kegiatan yang menuntut murid mengamati masalah dan menyusun solusi, sebagian murid lebih cepat menyampaikan pendapat, sementara yang lain memerlukan waktu atau dorongan agar berani berbicara. Pengalaman ini membuat saya melihat pembelajaran sosial emosional sebagai bagian dari pengelolaan pembelajaran sehari-hari.",
    challenge: "Tantangannya adalah menjaga agar semua murid mendapat ruang berpartisipasi tanpa membuat kegiatan terlalu lama. Guru perlu memastikan pendapat murid didengar sekaligus menjaga fokus pada tujuan tugas. Saya juga perlu mengelola respons diri sendiri ketika kelas ramai atau murid belum mengikuti arahan. Teguran yang terburu-buru dapat menghentikan perilaku sesaat, tetapi belum tentu membantu murid memahami dampak tindakannya.",
    concept: "Saya memahami bahwa kompetensi sosial emosional mencakup kemampuan mengenali keadaan diri, mengelola respons, memahami sudut pandang orang lain, membangun hubungan yang sehat, dan mengambil keputusan secara bertanggung jawab. Guru menjadi contoh melalui cara berbicara, mendengarkan, memberikan koreksi, dan menyikapi kesalahan. PSE tidak harus selalu berupa sesi khusus; pertanyaan reflektif, kesepakatan kerja kelompok, dan cara memberikan umpan balik dapat menjadi bagian dari praktik tersebut.",
    change: "Saya ingin lebih sadar memeriksa cara merespons situasi kelas, terutama ketika murid mengalami kesulitan atau diskusi tidak berjalan sesuai rencana. Saya akan membangun kesepakatan komunikasi sederhana, memberi kesempatan kepada murid menjelaskan sudut pandangnya, dan mengarahkan kritik pada pekerjaan atau tindakan, bukan pribadi murid. Saya juga akan menggunakan refleksi singkat agar murid menilai kontribusi dan kerja sama kelompoknya.",
    practicalReflection: {
      mostMeaningful: "Hal yang paling bermakna adalah memahami bahwa guru tidak hanya membantu murid menyelesaikan tugas, tetapi juga memberi contoh bagaimana menghadapi perbedaan dan kesalahan. Nada bicara, kesediaan mendengarkan, dan cara memberikan koreksi dapat memengaruhi suasana belajar.",
      mostRelevantConcept: "Konsep yang paling relevan adalah kesadaran diri, pengelolaan emosi, empati, dan keterampilan berelasi. Kompetensi ini dapat dilatih melalui rutinitas sederhana dan konsisten dalam kegiatan kelas.",
      teacherPractice: "Saya perlu memberi instruksi dengan tenang dan jelas, mendengarkan penjelasan murid sebelum menyimpulkan penyebab masalah, serta menjaga agar umpan balik tetap spesifik dan menghargai murid.",
      exampleApplication: "Dalam kerja kelompok saat membahas kebutuhan pelanggan pada materi proses bisnis, saya dapat meminta setiap anggota menyampaikan ide secara bergiliran, merangkum pendapat yang berbeda, lalu menyepakati keputusan berdasarkan alasan. Setelah kegiatan, murid merefleksikan apakah semua anggota mendapat kesempatan berkontribusi.",
      intendedChange: "Saya akan membiasakan refleksi singkat untuk memeriksa kesiapan belajar dan kerja sama. Saya juga akan merespons perilaku yang mengganggu dengan tetap tegas, tetapi tidak mempermalukan murid."
    },
    artifacts: [
      "LK 2.1–2.3 terkait pembelajaran sosial emosional",
      "Aktivitas 2.4: PSE untuk Mengembangkan Diri Guru sebagai Teladan",
      "Catatan refleksi tentang komunikasi dan kerja sama murid"
    ],
    documents: [
      {
        id: "lk-pse",
        title: "Lembar Kerja Pembelajaran Sosial Emosional",
        type: "LK",
        description: "Dokumentasi kegiatan dan refleksi mengenai kompetensi sosial emosional dalam pembelajaran.",
        semester: 2,
        courseSlug: "pembelajaran-sosial-emosional",
        url: "/documents/semester-2/LK.PSE.pdf",
        downloadName: "LK.PSE.pdf",
        status: "available",
      },
    ],
  },
  {
    id: "s2-03",
    slug: "pengajaran-pembelajaran-daring-bauran",
    title: "Pengajaran dan Pembelajaran Daring dan Bauran",
    semester: 2,
    description: "Mempelajari cara merancang pembelajaran daring dan bauran yang selaras dengan tujuan, kesiapan murid, ketersediaan perangkat, dan kondisi pembelajaran.",
    connection: "Pengalaman mengajar di SMK membuat saya menyadari bahwa penggunaan teknologi perlu berangkat dari kebutuhan belajar, bukan sekadar agar pembelajaran terlihat modern. Dalam materi proses bisnis, murid dapat diminta mengidentifikasi kebutuhan pelanggan, menentukan target pasar, dan mengembangkan ide usaha. Sebagian informasi dapat dipelajari melalui bahan digital sebelum pertemuan, sedangkan waktu tatap muka digunakan untuk berdiskusi, menguji ide, dan memperoleh umpan balik. Pola ini berpotensi membantu pemanfaatan waktu kelas, asalkan akses dan instruksi dirancang dengan jelas.",
    challenge: "Tantangan pembelajaran daring atau bauran adalah memastikan murid memahami tugas ketika guru tidak selalu mendampingi secara langsung. Akses perangkat dan koneksi dapat berbeda, sementara bahan digital yang terlalu panjang atau tersebar di banyak tempat justru menyulitkan murid. Saya perlu mempertimbangkan beban tugas, kemudahan akses, kejelasan petunjuk, dan alternatif ketika murid mengalami kendala teknis.",
    concept: "Saya memahami bahwa pembelajaran bauran bukan sekadar memindahkan materi kelas ke platform digital. Setiap aktivitas perlu memiliki tujuan yang jelas: kegiatan mandiri dapat digunakan untuk membaca, mengamati contoh, atau menjawab pertanyaan awal; sedangkan pertemuan tatap muka digunakan untuk diskusi, praktik, kolaborasi, dan klarifikasi. Teknologi mendukung interaksi dan umpan balik, bukan menggantikan keputusan pedagogis guru.",
    change: "Jika merancang pembelajaran bauran, saya akan menggunakan satu tempat utama untuk membagikan materi, instruksi, tenggat, dan cara mengumpulkan tugas. Saya akan memberikan bahan digital ringkas serta tugas awal yang terhubung langsung dengan aktivitas kelas. Saya juga akan mengecek keterpahaman instruksi dan menyiapkan pilihan pengerjaan yang realistis apabila akses internet atau perangkat murid terbatas.",
    practicalReflection: {
      mostMeaningful: "Hal yang paling bermakna adalah bahwa keberhasilan pembelajaran berbasis teknologi lebih ditentukan oleh rancangan aktivitas dan kejelasan arahan daripada banyaknya aplikasi yang digunakan.",
      mostRelevantConcept: "Konsep yang paling relevan adalah membagi fungsi belajar mandiri dan tatap muka secara sengaja. Kegiatan daring menyiapkan pemahaman awal, sedangkan pertemuan langsung memberi ruang untuk mengolah ide, berdiskusi, dan mendapat umpan balik.",
      teacherPractice: "Saya perlu memastikan semua bahan mudah ditemukan, petunjuk tidak ambigu, dan tugas digital memiliki kaitan langsung dengan tujuan pembelajaran. Saya juga harus mempertimbangkan akses murid dan tidak menganggap semua murid selalu memiliki koneksi stabil.",
      exampleApplication: "Pada materi proses bisnis, murid dapat mempelajari contoh layanan pelanggan atau profil target pasar melalui bahan ringkas sebelum pertemuan. Di kelas, mereka mendiskusikan calon pelanggan usaha yang dipilih, kebutuhan yang ingin dipenuhi, dan cara melayaninya. Hasil diskusi dikumpulkan melalui format sederhana yang mudah diakses.",
      intendedChange: "Saya akan merancang kegiatan digital secara bertahap, menggunakan platform seperlunya, dan mengevaluasi apakah teknologi benar-benar membantu murid memahami materi. Saya juga akan menyediakan petunjuk dan alternatif yang tidak bergantung sepenuhnya pada koneksi internet."
    },
    artifacts: [
      "Rancangan aktivitas pembelajaran daring atau bauran",
      "Bahan ajar digital dan petunjuk kegiatan murid",
      "Contoh tugas atau asesmen yang terhubung dengan kegiatan tatap muka"
    ],
    documents: [
      {
        id: "lk-bauran",
        title: "Lembar Kerja Pengajaran dan Pembelajaran Daring dan Bauran",
        type: "LK",
        description: "Dokumentasi rancangan dan refleksi pembelajaran daring serta bauran.",
        semester: 2,
        courseSlug: "pengajaran-pembelajaran-daring-bauran",
        url: "/documents/semester-2/LK.BAURAN.pdf",
        downloadName: "LK.BAURAN.pdf",
        status: "available",
      },
    ],
  },
  {
    id: "s2-04",
    slug: "projek-kepemimpinan",
    title: "Projek Kepemimpinan",
    semester: 2,
    description: "Merefleksikan pengalaman merancang dan menjalankan projek melalui kolaborasi, pembagian peran, komunikasi, pemecahan masalah, serta evaluasi proses dan hasil.",
    connection: "Dalam Projek Kepemimpinan bertema “Dari Ide Menjadi Aksi”, saya belajar bahwa gagasan yang baik perlu diterjemahkan menjadi pekerjaan yang terukur dan dijalankan bersama. Kegiatan pendampingan projek IoT menuntut tim menyepakati tujuan, membagi peran, mengatur target mingguan, memantau kemajuan, dan menyesuaikan bantuan dengan kebutuhan kelompok. Pengalaman ini memperlihatkan bahwa kepemimpinan bukan berarti mengerjakan semua hal sendiri, melainkan menjaga arah kegiatan sambil memberi ruang kepada anggota lain untuk mengambil tanggung jawab.",
    challenge: "Tantangan dalam projek kolaboratif adalah menjaga kesamaan pemahaman ketika anggota memiliki jadwal, kecepatan kerja, dan cara berkomunikasi yang berbeda. Rencana yang tampak jelas pada awal kegiatan belum tentu berjalan tepat sesuai perkiraan. Ketika progres terlambat atau terjadi kendala teknis, tim perlu membedakan masalah yang dapat diselesaikan melalui pengaturan ulang pekerjaan dengan masalah yang membutuhkan konsultasi atau bantuan tambahan.",
    concept: "Saya memahami bahwa kepemimpinan dalam projek memerlukan tujuan bersama, pembagian tanggung jawab yang jelas, komunikasi dua arah, pengambilan keputusan berdasarkan kondisi nyata, serta evaluasi berkala. Pendampingan yang baik tidak mengambil alih pekerjaan kelompok, tetapi menyediakan scaffolding berupa pertanyaan pemandu, konsultasi, dan bantuan secukupnya agar mereka dapat melanjutkan pekerjaan secara mandiri. Dokumentasi progres membantu keputusan tindak lanjut didasarkan pada perkembangan yang terlihat.",
    change: "Dalam projek berikutnya, saya ingin memperjelas indikator progres dan tanggung jawab setiap anggota sejak awal. Saya akan menggunakan catatan target mingguan sederhana, memeriksa hambatan sebelum tenggat, dan mendokumentasikan keputusan yang disepakati. Saat mendampingi kelompok, saya akan berusaha tidak langsung memberikan jawaban, melainkan mengajukan pertanyaan yang membantu mereka menganalisis masalah dan menentukan langkah berikutnya.",
    practicalReflection: {
      mostMeaningful: "Hal yang paling bermakna adalah memahami bahwa keberhasilan projek tidak hanya ditentukan oleh produk akhir. Koordinasi, konsistensi menjalankan peran, kemampuan menanggapi perubahan, dan refleksi terhadap keputusan juga menunjukkan perkembangan kepemimpinan.",
      mostRelevantConcept: "Konsep yang paling relevan adalah kepemimpinan kolaboratif dan pendampingan bertahap. Pemimpin atau pendamping menjaga tujuan bersama, tetapi tidak mengambil alih tanggung jawab pihak yang didampingi.",
      teacherPractice: "Saya perlu menetapkan target realistis, mengomunikasikan pembagian tugas, membuka ruang untuk menyampaikan kendala, dan melakukan pemantauan berkala. Ketika ada masalah, saya membantu menemukan pilihan penyelesaian tanpa langsung mengerjakan tugas anggota.",
      exampleApplication: "Dalam pendampingan projek IoT, target mingguan dapat dipecah menjadi pematangan ide, penentuan komponen dan rancangan, perakitan, pengujian, perbaikan, serta dokumentasi. Pada setiap tahap, kelompok menjelaskan progres, kendala, dan rencana berikutnya sehingga bantuan dapat diberikan sesuai kebutuhan.",
      intendedChange: "Saya akan lebih disiplin mendokumentasikan progres, memperjelas tindak lanjut setiap konsultasi, dan mengevaluasi proses kerja tim, bukan hanya menilai apakah kegiatan selesai tepat waktu."
    },
    artifacts: [
      "Rencana dan alur pelaksanaan Projek Kepemimpinan",
      "Target mingguan, catatan monitoring, atau dokumentasi konsultasi",
      "Dokumentasi kegiatan dan refleksi pelaksanaan projek"
    ],
    documents: [
      {
        id: "lk-projek-kepemimpinan",
        title: "Lembar Kerja Projek Kepemimpinan",
        type: "LK",
        description: "Dokumentasi perencanaan, pelaksanaan, kolaborasi, dan refleksi Projek Kepemimpinan.",
        semester: 2,
        courseSlug: "projek-kepemimpinan",
        url: "/documents/semester-2/LK.PK.pdf",
        downloadName: "LK.PK.pdf",
        status: "available",
      },
    ],
  },
  {
    id: "s2-05",
    slug: "ppl-mandiri",
    title: "PPL Mandiri",
    semester: 2,
    description: "Merefleksikan kemampuan merencanakan, melaksanakan, menilai, dan memperbaiki pembelajaran secara lebih mandiri berdasarkan kondisi nyata kelas dan kebutuhan murid.",
    connection: "Pengalaman PPL di SMK Negeri 2 Salatiga membantu saya memahami bahwa rencana pembelajaran harus terstruktur, tetapi tetap memberi ruang untuk menyesuaikan situasi kelas. Pada pembelajaran proses bisnis, murid tidak cukup hanya menghafal pengertian. Mereka perlu menggunakan konsep untuk memikirkan usaha yang mungkin dijalankan, mengenali target pasar, memahami kebutuhan pelanggan, dan menentukan cara melayani pelanggan. Aktivitas ini menuntut saya menyeimbangkan penjelasan konsep dengan kesempatan murid mengembangkan ide yang masuk akal.",
    challenge: "Tantangan dalam mengelola pembelajaran adalah menjaga agar kegiatan eksplorasi tetap terarah. Ketika murid diberi kesempatan memilih ide usaha, sebagian dapat segera menentukan gagasan, sedangkan yang lain membutuhkan pertanyaan pemandu untuk memperjelas produk, calon pelanggan, dan kebutuhan yang ingin dipenuhi. Saya juga perlu memastikan diskusi tidak hanya dikuasai anggota yang lebih aktif. Waktu terbatas mengharuskan saya memilih titik pendampingan yang paling penting.",
    concept: "Saya memahami bahwa kemandirian mengajar bukan berarti guru harus menyelesaikan semua persoalan tanpa dukungan. Kemandirian terlihat dari kemampuan mengambil keputusan berdasarkan tujuan, kondisi murid, hasil pengamatan, dan refleksi. Guru perlu menguasai materi, memberi instruksi runtut, memantau keterlibatan murid, serta menyesuaikan kegiatan ketika tidak berjalan sesuai rencana. Pembelajaran kontekstual lebih bermakna apabila murid menggunakan konsep untuk mengambil keputusan dan menjelaskan alasannya.",
    change: "Saya ingin lebih cermat merancang pertanyaan pemantik dan batasan tugas sebelum pembelajaran dimulai. Pada materi proses bisnis, saya akan membantu murid mengembangkan ide melalui pertanyaan tentang produk atau jasa, calon pelanggan, kebutuhan yang ingin dipenuhi, cara pelayanan, dan alasan memilih target pasar. Selama diskusi, saya akan memeriksa pemahaman pada beberapa titik dan menentukan apakah kelas perlu mendapat penjelasan ulang, contoh tambahan, atau waktu untuk memperbaiki gagasan.",
    practicalReflection: {
      mostMeaningful: "Hal yang paling bermakna adalah melihat bahwa murid lebih mudah memahami konsep ketika diminta menggunakannya untuk mengambil keputusan yang dekat dengan kehidupan nyata. Namun, kebebasan memilih ide tetap perlu disertai struktur dan pertanyaan pemandu agar tugas tidak berhenti pada gagasan yang terlalu umum.",
      mostRelevantConcept: "Konsep yang paling relevan adalah pembelajaran kontekstual yang menghubungkan konsep dengan keputusan nyata, disertai asesmen formatif untuk memantau proses berpikir murid.",
      teacherPractice: "Saya perlu mengawali kegiatan dengan penjelasan konsep yang cukup, memberikan contoh yang dekat dengan keseharian murid, lalu memfasilitasi penerapan melalui pertanyaan bertahap. Saya juga perlu memantau pemerataan partisipasi dan mengatur waktu diskusi secara realistis.",
      exampleApplication: "Murid diminta memilih ide usaha sederhana, menjelaskan produk atau jasa yang ditawarkan, menentukan target pelanggan, mengidentifikasi kebutuhan pelanggan, dan merancang cara menangani pertanyaan atau keluhan. Saya menilai bukan hanya menariknya ide, tetapi juga hubungan logis antara produk, target pasar, dan bentuk pelayanan.",
      intendedChange: "Saya akan menyiapkan lembar kerja yang membantu murid berpindah dari ide umum ke keputusan konkret. Saya juga akan memperbaiki cara memantau diskusi agar murid yang masih ragu memperoleh bantuan, sementara murid yang sudah siap dapat menguji kelayakan idenya dengan pertanyaan lebih mendalam."
    },
    artifacts: [
      "Modul ajar atau perangkat pembelajaran PPL Mandiri",
      "Lembar kerja analisis ide usaha, target pasar, dan customer handling",
      "Catatan asesmen, refleksi pelaksanaan, dan rencana tindak lanjut"
    ],
    documents: [
      {
        id: "lk-ppl-mandiri",
        title: "Lembar Kerja PPL Mandiri",
        type: "LK",
        description: "Dokumentasi kegiatan dan refleksi praktik pembelajaran mandiri.",
        semester: 2,
        courseSlug: "ppl-mandiri",
        url: "/documents/semester-2/LK.PPLM.pdf",
        downloadName: "LK.PPLM.pdf",
        status: "available",
      },
    ],
  },
  {
    id: "s2-06",
    slug: "seminar-ppg",
    title: "Seminar PPG",
    semester: 2,
    description: "Merefleksikan proses menyusun, menyampaikan, dan mempertanggungjawabkan hasil pembelajaran atau projek secara runtut, berbasis bukti, dan terbuka terhadap masukan.",
    connection: "Pengalaman PPL memberi saya catatan tentang perencanaan, pelaksanaan, respons murid, dan kendala yang muncul selama pembelajaran. Pengalaman tersebut akan lebih bermanfaat apabila didokumentasikan dan dianalisis, bukan hanya diingat sebagai kegiatan yang selesai. Saat menyusun laporan atau presentasi, saya perlu menjelaskan tujuan, langkah kegiatan, bukti hasil belajar, kendala yang benar-benar ditemui, dan perubahan yang akan dilakukan. Hal ini menjadi dasar untuk menyampaikan pengalaman secara profesional dan dapat dipertanggungjawabkan dalam forum seminar.",
    challenge: "Tantangan menyiapkan presentasi akademik adalah memilih informasi paling penting tanpa kehilangan konteks. Pengalaman mengajar memuat banyak detail, tetapi waktu presentasi terbatas. Saya perlu membedakan deskripsi kegiatan, bukti yang mendukung kesimpulan, dan pendapat pribadi. Saya juga perlu siap menerima pertanyaan atau masukan sebagai kesempatan memperjelas alasan dan memperbaiki analisis, bukan sebagai penilaian terhadap diri.",
    concept: "Saya memahami bahwa seminar bukan hanya kegiatan menyampaikan hasil, tetapi juga ruang untuk menguji kejelasan pemikiran, ketepatan bukti, dan konsistensi antara tujuan, pelaksanaan, serta kesimpulan. Penyampaian yang baik membutuhkan alur runtut, data atau dokumentasi relevan, pengakuan terhadap keterbatasan, dan kemampuan menanggapi pertanyaan secara jujur. Profesionalitas tampak ketika saya membedakan hal yang benar-benar terjadi, interpretasi terhadap pengalaman, dan rencana perbaikan yang masih akan dilakukan.",
    change: "Saya akan menyiapkan presentasi dengan alur masalah, tujuan, langkah pelaksanaan, bukti atau hasil, refleksi, dan tindak lanjut. Saya akan memilih dokumentasi relevan serta memastikan kesimpulan tidak melampaui bukti yang tersedia. Sebelum presentasi, saya akan berlatih menjelaskan inti temuan secara ringkas dan menyiapkan jawaban terhadap pertanyaan tentang alasan pemilihan strategi, kendala, serta keterbatasan pelaksanaan.",
    practicalReflection: {
      mostMeaningful: "Hal yang paling bermakna adalah memahami bahwa pengalaman praktik mengajar dapat menjadi bahan pengembangan profesional jika dicatat dan dianalisis secara jujur. Kendala dan bagian yang perlu diperbaiki juga penting untuk menjelaskan proses belajar sebagai calon guru.",
      mostRelevantConcept: "Konsep yang paling relevan adalah refleksi berbasis bukti dan komunikasi akademik. Pernyataan tentang proses atau hasil perlu didukung perangkat ajar, catatan pengamatan, hasil kerja, atau dokumentasi yang benar-benar tersedia.",
      teacherPractice: "Saya perlu menyusun paparan dengan struktur jelas, menggunakan istilah secara konsisten, menampilkan bukti yang relevan, dan menyampaikan keterbatasan secara terbuka. Saat menerima masukan, saya perlu mendengarkan, mengklarifikasi jika diperlukan, lalu menentukan tindak lanjut.",
      exampleApplication: "Dalam mempresentasikan pengalaman pembelajaran proses bisnis, saya dapat menjelaskan tujuan kegiatan, cara murid mengembangkan ide usaha dan menentukan target pasar, bentuk asesmen yang digunakan, contoh hasil kerja yang tersedia, kendala selama diskusi, serta perubahan yang akan dilakukan pada pembelajaran berikutnya.",
      intendedChange: "Saya akan membiasakan dokumentasi pembelajaran sejak awal agar refleksi dan presentasi tidak hanya mengandalkan ingatan. Saya juga akan memperkuat kemampuan menyampaikan argumen berdasarkan bukti dan mengubah masukan yang relevan menjadi langkah perbaikan."
    },
    artifacts: [
      "Bahan presentasi atau naskah Seminar PPG",
      "Dokumentasi pembelajaran atau projek yang dipresentasikan",
      "Catatan masukan, refleksi, dan rencana tindak lanjut"
    ],
    documents: [
      {
        id: "lk-seminar-ppg",
        title: "Lembar Kerja Seminar PPG",
        type: "LK",
        description: "Dokumentasi persiapan, penyampaian, dan refleksi seminar PPG.",
        semester: 2,
        courseSlug: "seminar-ppg",
        url: "/documents/semester-2/LK.SEMINAR.pdf",
        downloadName: "LK.SEMINAR.pdf",
        status: "available",
      },
    ],
  },
];

export default semester2Courses;

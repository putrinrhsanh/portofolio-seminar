/**
 * Data refleksi Semester 1 PPG Calon Guru.
 * Struktur mengikuti Course pada src/types/reflection.ts.
 */
import type { Course } from "@/types/reflection";

export const semester1Courses: Course[] = [
  {
    id: "pmad",
    slug: "pembelajaran-mendalam-dan-asesmen-dasar",
    title: "Pembelajaran Mendalam dan Asesmen Dasar",
    semester: 1,
    description:
      "Mempelajari perencanaan pembelajaran yang berorientasi pada pemahaman mendalam, pengalaman belajar yang bermakna, serta penggunaan asesmen sebagai dasar untuk memperbaiki proses pembelajaran.",
    connection:
      "Sebelum mempelajari mata kuliah ini, saya cenderung memandang pembelajaran dari sisi penyampaian materi dan ketercapaian tujuan pembelajaran. Selama PPL di SMK Negeri 2 Salatiga, saya mulai menyadari bahwa murid tidak selalu memahami materi hanya dengan mendengarkan penjelasan. Pada pembelajaran Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi, terutama materi K3LH, murid perlu mengamati lingkungan, mengenali risiko, berdiskusi, dan menerapkan pengetahuan melalui kegiatan nyata.",
    challenge:
      "Tantangan yang saya rasakan adalah menyusun kegiatan yang tetap bermakna dalam keterbatasan waktu pembelajaran. Dalam satu pertemuan, saya perlu membagi waktu untuk apersepsi, penjelasan materi, diskusi kelompok, praktik, presentasi, dan asesmen. Selain itu, kesiapan murid tidak sama. Ada murid yang cepat memahami instruksi, sedangkan murid lain masih membutuhkan contoh, arahan bertahap, atau pendampingan ketika mengerjakan tugas.",
    concept:
      "Saya memahami bahwa pembelajaran mendalam tidak hanya menekankan banyaknya materi yang disampaikan, tetapi bagaimana murid membangun pemahaman, menerapkan pengetahuan, dan merefleksikan pengalaman belajarnya. Asesmen juga tidak seharusnya hanya digunakan untuk memberikan nilai akhir. Hasil asesmen awal, pengamatan selama proses, dan penilaian produk dapat membantu guru mengenali kebutuhan murid serta menentukan tindak lanjut pembelajaran.",
    change:
      "Saya ingin merancang pembelajaran dengan tujuan yang lebih jelas, aktivitas yang saling berkaitan, dan asesmen yang direncanakan sejak awal. Saya juga akan menggunakan hasil asesmen untuk menentukan bentuk bantuan yang dibutuhkan murid. Ketika sebagian murid belum memahami materi, saya tidak langsung mengulang seluruh penjelasan, tetapi berusaha menemukan bagian yang belum dipahami dan memberikan contoh atau pendampingan yang lebih sesuai.",
    practicalReflection: {
      mostMeaningful:
        "Pengalaman mengajar materi K3LH membuat saya memahami bahwa keberhasilan pembelajaran tidak cukup dilihat dari selesainya tugas. Ketika murid mengamati rambu keselamatan, merancang rambu, mempraktikkan penggunaan APD, dan membahas prosedur keadaan darurat, saya perlu memperhatikan proses berpikir mereka, bukan hanya hasil akhirnya.",
      mostRelevantConcept:
        "Asesmen merupakan bagian dari proses pembelajaran, bukan sekadar alat untuk memberikan nilai akhir. Asesmen awal, pengamatan selama kegiatan, dan penilaian produk membantu guru mengenali pemahaman serta kebutuhan murid.",
      teacherPractice:
        "Saya perlu memberikan contoh, memeriksa pemahaman, dan mengamati proses kerja kelompok. Instruksi yang tampak jelas bagi guru belum tentu langsung dipahami semua murid.",
      exampleApplication:
        "Dalam pembelajaran K3LH, saya dapat menghubungkan asesmen awal dengan kegiatan observasi lingkungan sekolah dan laboratorium TJKT. Hasil observasi menjadi dasar bagi murid untuk menentukan rambu yang diperlukan. Selama proses desain dan presentasi, saya dapat menggunakan pertanyaan pemantik, lembar pengamatan, dan rubrik produk untuk menilai pemahaman mereka.",
      intendedChange:
        "Saya akan merencanakan asesmen sejak awal, memeriksa pemahaman murid pada beberapa tahap, dan menggunakan hasilnya untuk menentukan tindak lanjut yang sesuai.",
    },
    artifacts: [
      "Lembar Kerja Pembelajaran Mendalam dan Asesmen Dasar — Dokumentasi analisis dan pemahaman tentang perencanaan pembelajaran serta penggunaan asesmen.",
      "Modul Ajar K3LH — Contoh penerapan tujuan pembelajaran, aktivitas kontekstual, asesmen, dan refleksi dalam pembelajaran di kelas X TKJ.",
      "Instrumen dan Hasil Asesmen K3LH — Bukti penggunaan asesmen untuk melihat pemahaman murid dan menentukan tindak lanjut.",
    ],
    documents: [
  {
    id: "lk-pmad",
    title: "Lembar Kerja Pembelajaran Mendalam dan Asesmen Dasar",
    type: "LK",
    description: "Dokumentasi kegiatan dan refleksi pembelajaran mendalam serta asesmen.",
    semester: 1,
    courseSlug: "pembelajaran-mendalam-dan-asesmen-dasar",
    url: "/documents/semester-1/LK.PMAD.pdf",
    downloadName: "LK.PMAD.pdf",
    status: "available",
  },
],
  },
  {
    id: "growth-mindset",
    slug: "pola-pikir-bertumbuh",
    title: "Pola Pikir Bertumbuh (Growth Mindset) dalam Pembelajaran",
    semester: 1,
    description:
      "Mempelajari pentingnya pola pikir bertumbuh dalam menghadapi tantangan, memberikan umpan balik, dan membangun lingkungan belajar yang mendukung perkembangan kemampuan murid.",
    connection:
      "Saya pernah melihat bahwa kesulitan dalam pembelajaran praktik dapat membuat murid merasa kurang mampu. Hal ini terasa relevan ketika pembelajaran berkaitan dengan keterampilan teknis, seperti instalasi Windows. Proses instalasi yang gagal tidak selalu disebabkan oleh kurangnya kemampuan murid. Kondisi perangkat, spesifikasi laptop, dan masalah teknis lainnya juga dapat memengaruhi hasil praktik.",
    challenge:
      "Tantangan saya adalah memberikan respons yang tepat ketika murid mengalami kegagalan atau mulai kehilangan kepercayaan diri. Guru perlu mendorong murid untuk mencoba kembali, tetapi juga harus membantu mereka memahami penyebab masalah. Memberikan motivasi secara umum saja belum cukup apabila murid belum mengetahui langkah apa yang perlu diperbaiki.",
    concept:
      "Growth mindset mengajarkan bahwa kemampuan dapat dikembangkan melalui usaha, strategi yang sesuai, umpan balik, dan proses belajar. Kegagalan dapat menjadi bahan evaluasi, bukan penentu bahwa seseorang tidak mampu. Namun, pola pikir bertumbuh juga tidak berarti semua masalah dapat diselesaikan hanya dengan bekerja lebih keras. Guru perlu membantu murid memeriksa strategi, memahami kesalahan, dan mempertimbangkan kondisi yang memengaruhi proses belajar.",
    change:
      "Saya ingin membiasakan diri memberikan umpan balik yang spesifik dan berfokus pada proses. Ketika murid mengalami kesulitan, saya akan membantu mereka mengidentifikasi masalah, memeriksa langkah yang sudah dilakukan, dan memilih strategi berikutnya. Saya juga ingin menghindari pelabelan seperti murid pintar atau kurang mampu hanya berdasarkan satu hasil praktik.",
    practicalReflection: {
      mostMeaningful:
        "Pengalaman pembelajaran instalasi Windows mengingatkan saya bahwa hasil praktik perlu dilihat secara kontekstual. Ketika instalasi tidak berhasil pada perangkat tertentu, murid perlu dibimbing untuk memeriksa pesan kesalahan dan kondisi perangkat sebelum menyimpulkan bahwa mereka tidak mampu.",
      mostRelevantConcept:
        "Growth mindset menekankan bahwa kemampuan dapat berkembang melalui strategi, usaha, dan umpan balik. Kegagalan menjadi bahan evaluasi, tetapi guru juga perlu mempertimbangkan faktor teknis yang berada di luar kendali murid.",
      teacherPractice:
        "Saya perlu memberikan umpan balik yang jelas dan membantu murid menelusuri penyebab masalah, bukan sekadar meminta mereka mencoba lagi tanpa arahan.",
      exampleApplication:
        "Dalam praktik instalasi Windows, saya dapat membimbing murid mengamati gejala, mencatat pesan kesalahan, memeriksa kemungkinan penyebab, mencoba solusi yang aman, dan mengevaluasi hasilnya. Saya juga akan menghargai ketelitian serta proses perbaikan, bukan hanya keberhasilan akhir.",
      intendedChange:
        "Saya akan menghindari pelabelan kemampuan berdasarkan satu hasil praktik dan membiasakan pertanyaan pemandu yang membantu murid menentukan langkah perbaikan berikutnya.",
    },
    artifacts: [
      "LK 3.2 – Transformasi Fixed Mindset menjadi Growth Mindset — Latihan mengubah respons yang membatasi diri menjadi respons yang berorientasi pada proses dan strategi.",
      "LK 3.3 – Respons Guru terhadap Permasalahan Pembelajaran — Dokumentasi analisis dan penyusunan respons guru terhadap tantangan yang dihadapi murid.",
    ],
    documents: [
  {
    id: "lk-growth-mindset",
    title: "Lembar Kerja Growth Mindset",
    type: "LK",
    description: "Dokumentasi refleksi tentang pola pikir bertumbuh dalam pembelajaran.",
    semester: 1,
    courseSlug: "pola-pikir-bertumbuh",
    url: "/documents/semester-1/LK.GM.pdf",
    downloadName: "LK.GM.pdf",
    status: "available",
  },
],
  },
  {
    id: "computational-thinking",
    slug: "computational-thinking",
    title: "Computational Thinking",
    semester: 1,
    description:
      "Mempelajari cara berpikir sistematis untuk menyelesaikan masalah melalui dekomposisi, pengenalan pola, abstraksi, dan penyusunan algoritma.",
    connection:
      "Sebagai calon guru Informatika, saya sebelumnya lebih sering mengaitkan computational thinking dengan pemrograman. Melalui perkuliahan, termasuk analisis soal Bebras dan PISA, saya memahami bahwa cara berpikir komputasional dapat diterapkan pada berbagai persoalan sehari-hari. Hal ini sesuai dengan pembelajaran di SMK yang menuntut murid menganalisis masalah, menyusun langkah kerja, dan menentukan solusi secara logis.",
    challenge:
      "Tantangannya adalah membuat konsep computational thinking terasa dekat dengan pengalaman murid, bukan sekadar istilah yang harus dihafalkan. Saya perlu merancang aktivitas yang membantu murid memahami proses berpikirnya. Selain itu, tidak semua masalah harus diselesaikan menggunakan komputer atau pemrograman, sehingga konteks dan tujuan kegiatan perlu dipilih secara tepat.",
    concept:
      "Saya memahami empat fondasi utama computational thinking, yaitu dekomposisi untuk memecah masalah menjadi bagian yang lebih kecil, pengenalan pola untuk menemukan kesamaan, abstraksi untuk memilih informasi yang relevan, dan algoritma untuk menyusun langkah penyelesaian secara terurut. Keempatnya dapat digunakan bersama-sama ketika murid menghadapi masalah teknis maupun situasi yang membutuhkan pengambilan keputusan.",
    change:
      "Saya ingin lebih sering menyisipkan proses berpikir komputasional dalam pembelajaran Informatika dan TJKT. Saya akan meminta murid menjelaskan bagaimana mereka mengidentifikasi masalah, informasi apa yang dianggap penting, pola apa yang ditemukan, dan mengapa langkah penyelesaian tertentu dipilih. Dengan demikian, murid tidak hanya mengikuti prosedur, tetapi juga memahami alasan di balik prosedur tersebut.",
    practicalReflection: {
      mostMeaningful:
        "Saya menyadari bahwa computational thinking dapat diterapkan dalam aktivitas kontekstual tanpa harus selalu menggunakan komputer. Kegiatan observasi lingkungan, misalnya, menuntut murid mengenali masalah, memilih informasi penting, dan menyusun langkah tindak lanjut.",
      mostRelevantConcept:
        "Empat fondasi computational thinking adalah dekomposisi, pengenalan pola, abstraksi, dan algoritma. Keempatnya membantu murid memahami masalah dan menyusun penyelesaian secara sistematis.",
      teacherPractice:
        "Saya perlu meminta murid menjelaskan alasan di balik langkah yang mereka pilih, bukan hanya menilai apakah jawaban atau hasil akhirnya benar.",
      exampleApplication:
        "Dalam kegiatan K3LH, murid dapat memecah persoalan keselamatan berdasarkan lokasi, potensi bahaya, pihak yang berisiko, dan tindakan pencegahan. Murid kemudian membandingkan pola bahaya, memilih informasi utama, dan menyusun langkah tindakan sesuai prosedur sekolah.",
      intendedChange:
        "Saya akan lebih sering menggunakan pertanyaan yang mendorong murid menjelaskan proses berpikir dan alasan pemilihan solusi.",
    },
    artifacts: [
      "Lembar Kerja Computational Thinking — Dokumentasi analisis permasalahan dengan pendekatan berpikir komputasional.",
      "Analisis Soal Bebras dan PISA — Latihan mengidentifikasi strategi berpikir, pola, informasi penting, dan langkah penyelesaian.",
      "RPP Terintegrasi Computational Thinking — Rancangan pembelajaran yang mengintegrasikan unsur berpikir komputasional ke dalam kegiatan belajar.",
    ],
    documents: [
  {
    id: "lk-computational-thinking",
    title: "Lembar Kerja Computational Thinking",
    type: "LK",
    description: "Dokumentasi pembelajaran berpikir komputasional dan penyelesaian masalah.",
    semester: 1,
    courseSlug: "computational-thinking",
    url: "/documents/semester-1/LK.CT.pdf",
    downloadName: "LK.CT.pdf",
    status: "available",
  },
],
  },
  {
    id: "filosofi-pendidikan",
    slug: "filosofi-pendidikan-dan-pendidikan-nilai",
    title: "Filosofi Pendidikan dan Pendidikan Nilai",
    semester: 1,
    description:
      "Mengkaji dasar pemikiran pendidikan, pemikiran Ki Hadjar Dewantara, pendidikan yang memerdekakan, serta peran guru dalam menumbuhkan nilai dan karakter murid.",
    connection:
      "Pengalaman PPL membuat saya melihat bahwa mengajar bukan hanya menyampaikan pengetahuan. Dalam pembelajaran praktik di SMK, murid juga belajar bertanggung jawab terhadap alat, menghargai pendapat anggota kelompok, mengikuti prosedur keselamatan, dan menyelesaikan tugas bersama. Hal tersebut berkaitan dengan pandangan bahwa pendidikan perlu mengembangkan kemampuan sekaligus membentuk karakter.",
    challenge:
      "Tantangan yang saya hadapi adalah menerjemahkan nilai-nilai pendidikan menjadi tindakan yang nyata dalam pembelajaran. Nilai seperti tanggung jawab, kemandirian, dan gotong royong akan sulit berkembang apabila hanya disampaikan melalui nasihat. Guru perlu merancang situasi belajar yang memberi kesempatan kepada murid untuk mempraktikkan nilai tersebut, sekaligus memberikan contoh dan pendampingan.",
    concept:
      "Saya memahami bahwa pemikiran Ki Hadjar Dewantara menempatkan murid sebagai individu yang perlu dituntun agar potensinya berkembang. Guru bukan satu-satunya sumber pengetahuan dan bukan pula pihak yang mengambil alih seluruh proses belajar. Guru perlu menciptakan lingkungan yang mendukung, memberikan teladan, membangun kemauan, serta membantu murid belajar bertanggung jawab atas proses dan pilihannya.",
    change:
      "Saya ingin lebih sadar dalam mengintegrasikan nilai pendidikan ke dalam aktivitas pembelajaran. Saya akan memberikan ruang kepada murid untuk menyampaikan pendapat, membagi tanggung jawab, membuat keputusan berdasarkan alasan yang jelas, dan merefleksikan konsekuensi tindakannya. Saya juga perlu menunjukkan keteladanan melalui kedisiplinan, cara berkomunikasi, serta konsistensi dalam menerapkan aturan.",
    practicalReflection: {
      mostMeaningful:
        "Kegiatan kelompok menunjukkan bahwa nilai tanggung jawab dan kepedulian lebih mudah dipahami ketika murid mengalami sendiri situasi yang menuntut nilai tersebut, bukan hanya mendengarkan nasihat.",
      mostRelevantConcept:
        "Pemikiran Ki Hadjar Dewantara menekankan bahwa guru menuntun perkembangan potensi murid melalui keteladanan, dukungan, dan lingkungan belajar yang mendukung.",
      teacherPractice:
        "Saya perlu memberi ruang bagi murid untuk menyampaikan pendapat, membagi tanggung jawab, dan mengambil keputusan dengan alasan yang jelas. Saya juga harus konsisten menjadi teladan dalam kedisiplinan dan komunikasi.",
      exampleApplication:
        "Dalam kegiatan kelompok K3LH, saya dapat memberi kesempatan kepada setiap anggota untuk berkontribusi dan meminta kelompok menjelaskan alasan di balik keputusan mereka. Nilai tanggung jawab juga dapat dibangun melalui kebiasaan menjaga alat dan merapikan area kerja setelah praktik.",
      intendedChange:
        "Saya akan merancang kegiatan yang memberi kesempatan kepada murid untuk mempraktikkan tanggung jawab, kemandirian, gotong royong, dan kepedulian secara nyata.",
    },
    artifacts: [
      "Analisis dan Modifikasi Modul Ajar Berbasis Filosofi Ki Hadjar Dewantara — Dokumentasi upaya menghubungkan filosofi pendidikan dengan perencanaan pembelajaran.",
      "Analisis Kasus Ali Mogok Sekolah — Refleksi terhadap persoalan pendidikan dengan mempertimbangkan sudut pandang dan kebutuhan pihak terkait.",
      "Analisis Pendidikan Nilai dan Kode Etik Guru — Dokumentasi pemikiran tentang nilai, tanggung jawab profesional, dan pengambilan keputusan guru.",
      "Koneksi Antar Materi dan Refleksi Aksi Nyata — Rangkuman hubungan konsep perkuliahan dengan komitmen pengembangan praktik pendidikan.",
    ],
    documents: [
  {
    id: "lk-filosofi-pendidikan",
    title: "Lembar Kerja Filosofi Pendidikan dan Pendidikan Nilai",
    type: "LK",
    description: "Dokumentasi refleksi tentang filosofi pendidikan dan penerapan nilai dalam pembelajaran.",
    semester: 1,
    courseSlug: "filosofi-pendidikan-dan-pendidikan-nilai",
    url: "/documents/semester-1/LK.FPPN.pdf",
    downloadName: "LK.FPPN.pdf",
    status: "available",
  },
],
  },
  {
    id: "ppdp",
    slug: "pemahaman-tentang-peserta-didik-dan-pembelajaran",
    title: "Pemahaman tentang Peserta Didik dan Pembelajaran",
    semester: 1,
    description:
      "Mempelajari perkembangan, karakteristik, kebutuhan, kesiapan belajar, dan keberagaman murid sebagai dasar untuk merancang pembelajaran yang responsif dan inklusif.",
    connection:
      "Selama PPL di kelas X TKJ, saya menemukan bahwa murid memiliki kesiapan dan cara belajar yang beragam. Dalam kegiatan K3LH, sebagian murid dapat segera mengidentifikasi bahaya dan mengembangkan ide desain rambu, sedangkan sebagian lainnya masih memerlukan arahan tentang hubungan antara simbol, warna, lokasi, dan pesan keselamatan. Perbedaan tersebut mengingatkan saya bahwa satu bentuk penjelasan belum tentu cukup untuk semua murid.",
    challenge:
      "Tantangannya adalah memberikan dukungan sesuai kebutuhan tanpa membuat pembelajaran terlalu rumit atau menghabiskan waktu. Dalam kelas dengan jumlah murid yang cukup banyak, guru tidak selalu dapat memberikan pendampingan individual secara terus-menerus. Saya perlu memilih strategi yang realistis, misalnya instruksi bertahap, contoh produk, pembagian peran kelompok, dan pemeriksaan pemahaman pada titik-titik penting.",
    concept:
      "Saya memahami bahwa pemahaman terhadap murid perlu dibangun melalui pengamatan dan asesmen, bukan hanya berdasarkan kesan awal atau label kemampuan. Pembelajaran yang responsif dapat dilakukan dengan menyesuaikan dukungan, cara murid mengakses informasi, dan bentuk tantangan yang diberikan. Penyesuaian tidak harus selalu berupa tugas yang sepenuhnya berbeda untuk setiap murid; dukungan sederhana yang tepat juga dapat membantu mereka berpartisipasi.",
    change:
      "Saya ingin memulai pembelajaran dengan mencari tahu pengetahuan awal dan kebutuhan murid, lalu menggunakan hasilnya untuk menentukan strategi. Saya akan menyediakan contoh dan panduan bagi murid yang membutuhkan bantuan, sementara murid yang lebih siap dapat diberi kesempatan untuk mengembangkan alasan, membandingkan solusi, atau membantu menjelaskan proses secara kolaboratif. Saya juga akan menghindari penggunaan hasil asesmen sebagai label tetap terhadap kemampuan murid.",
    practicalReflection: {
      mostMeaningful:
        "Pengalaman merancang rambu K3 dan melaksanakan kegiatan kelompok menunjukkan bahwa murid dapat berkontribusi dengan cara yang berbeda. Perbedaan tersebut dapat menjadi kekuatan kelompok apabila pembagian tugas dirancang dengan baik, tetapi peran juga perlu berganti agar murid mengembangkan keterampilan baru.",
      mostRelevantConcept:
        "Pemahaman terhadap murid perlu dibangun melalui pengamatan dan asesmen. Dukungan belajar dapat disesuaikan tanpa harus selalu membuat tugas yang sepenuhnya berbeda untuk setiap murid.",
      teacherPractice:
        "Saya perlu memberikan instruksi bertahap, contoh, pertanyaan pemandu, dan pembagian peran yang fleksibel. Saya juga perlu memantau apakah setiap murid memperoleh kesempatan untuk berpartisipasi.",
      exampleApplication:
        "Dalam kelompok K3LH, peran seperti pengamat lokasi, pencatat risiko, perancang rambu, dan penyaji dapat membantu murid memulai pekerjaan. Peran dapat diganti agar semua murid memperoleh pengalaman beragam. Murid yang memerlukan bantuan dapat menggunakan contoh dan pertanyaan pemandu, sedangkan murid yang lebih siap dapat membandingkan alternatif solusi.",
      intendedChange:
        "Saya akan menggunakan asesmen awal dan hasil pengamatan untuk menyesuaikan dukungan, serta menghindari penggunaan hasil asesmen sebagai label tetap terhadap kemampuan murid.",
    },
    artifacts: [
      "Lembar Kerja Pemahaman tentang Peserta Didik dan Pembelajaran — Dokumentasi analisis karakteristik, kebutuhan, dan implikasinya terhadap proses pembelajaran.",
      "Lembar Observasi Pembelajaran Mendalam Berbasis TaRL — Dokumen pengamatan yang mendukung refleksi tentang kesiapan belajar dan pemberian bantuan kepada murid.",
      "Hasil Asesmen Awal Kelas X TKJ — Bukti awal untuk mengenali variasi pemahaman murid dan merencanakan tindak lanjut.",
    ],
    documents: [
  {
    id: "lk-pemahaman-murid",
    title: "Lembar Kerja Pemahaman tentang Peserta Didik dan Pembelajaran",
    type: "LK",
    description: "Dokumentasi analisis karakteristik, kebutuhan, dan kesiapan belajar murid.",
    semester: 1,
    courseSlug: "pemahaman-tentang-peserta-didik-dan-pembelajaran",
    url: "/documents/semester-1/LK.PPDP.pdf",
    downloadName: "LK.PPDP.pdf",
    status: "available",
  },
],
  },
  {
    id: "ppl-terbimbing",
    slug: "ppl-terbimbing",
    title: "PPL Terbimbing",
    semester: 1,
    description:
      "Pengalaman menerapkan teori perkuliahan dalam praktik pembelajaran instalasi Windows di kelas X TKJ SMK Negeri 2 Salatiga, mulai dari perencanaan, pelaksanaan, pendampingan praktik, hingga refleksi.",
    connection:
      "Sebelum melaksanakan praktik mengajar, saya lebih banyak mempelajari perencanaan pembelajaran melalui perkuliahan dan penyusunan perangkat ajar. Melalui PPL Terbimbing, saya mendapat kesempatan untuk menerapkan perencanaan tersebut dalam pembelajaran instalasi Windows di kelas X TKJ SMK Negeri 2 Salatiga. Pengalaman ini membantu saya memahami bahwa pembelajaran praktik membutuhkan lebih dari sekadar penjelasan materi. Murid perlu memahami urutan kerja, mengikuti instruksi, dan mencoba menerapkan langkah-langkah instalasi secara langsung.",
    challenge:
      "Salah satu tantangan yang saya temui adalah perbedaan kecepatan murid dalam mengikuti proses instalasi Windows. Ada murid yang dapat mengikuti tahapan praktik dengan relatif lancar, sedangkan murid lain membutuhkan arahan tambahan ketika mengalami kendala. Saya juga menyadari bahwa kegagalan instalasi tidak selalu menunjukkan bahwa murid belum memahami materi. Pada beberapa kasus, kondisi dan spesifikasi laptop turut memengaruhi proses instalasi. Situasi ini menuntut saya untuk lebih teliti dalam mengidentifikasi penyebab masalah dan menentukan bantuan yang sesuai.",
    concept:
      "Pengalaman ini memperkuat pemahaman saya bahwa pembelajaran praktik perlu dirancang secara bertahap, dengan instruksi yang jelas, demonstrasi yang mudah diikuti, serta pendampingan selama murid bekerja. Guru perlu memantau proses, bukan hanya memeriksa hasil akhir. Ketika muncul kendala, guru sebaiknya membantu murid menelusuri penyebabnya dan menentukan langkah berikutnya, bukan langsung mengambil alih pekerjaan. Saya juga belajar bahwa evaluasi pembelajaran perlu mempertimbangkan proses kerja dan kondisi yang memengaruhi hasil praktik.",
    change:
      "Untuk pembelajaran berikutnya, saya ingin memperbaiki cara memberikan instruksi agar lebih ringkas, runtut, dan mudah diikuti. Saya akan memastikan murid memahami tahapan penting sebelum mulai praktik, menyediakan panduan langkah kerja, serta memantau perkembangan mereka pada beberapa titik pemeriksaan. Ketika instalasi mengalami kegagalan, saya akan mengarahkan murid untuk mengamati pesan kesalahan dan memeriksa kemungkinan penyebabnya terlebih dahulu. Saya juga akan lebih memperhatikan kesiapan perangkat agar kendala teknis dapat diantisipasi sejak perencanaan.",
    practicalReflection: {
      mostMeaningful:
        "Praktik mengajar instalasi Windows memberi saya pengalaman langsung dalam mendampingi murid ketika menerapkan prosedur teknis. Saya menyadari bahwa penjelasan yang dapat dipahami oleh guru belum tentu langsung dipahami oleh semua murid. Sebagian murid membutuhkan demonstrasi ulang atau petunjuk yang lebih terperinci. Ketika terjadi kegagalan instalasi, saya belajar untuk tidak terburu-buru menyimpulkan bahwa murid kurang mampu, tetapi memeriksa proses, pesan kesalahan, dan kondisi perangkat.",
      mostRelevantConcept:
        "Pembelajaran praktik perlu dirancang bertahap dengan instruksi yang jelas, demonstrasi, pendampingan, dan evaluasi proses. Hasil praktik juga perlu dilihat dengan mempertimbangkan kondisi perangkat yang digunakan.",
      teacherPractice:
        "Saya perlu memantau proses kerja, memberi pertanyaan pemandu, dan membantu murid menganalisis kendala tanpa langsung mengambil alih pekerjaan mereka.",
      exampleApplication:
        "Dalam pembelajaran instalasi Windows, saya akan membagi kegiatan menjadi tahapan pemeriksaan kesiapan perangkat, persiapan media instalasi, pelaksanaan sesuai prosedur, dan pemeriksaan hasil. Ketika murid mengalami kesulitan, saya akan menanyakan bagian yang belum berhasil, pesan kesalahan yang muncul, dan kemungkinan penyebabnya. Jika kendala berkaitan dengan spesifikasi atau kondisi laptop, saya akan membantu murid membedakannya dari kesalahan prosedur.",
      intendedChange:
        "Saya akan membuat instruksi dan panduan praktik yang lebih runtut, memeriksa pemahaman pada beberapa titik, serta mengantisipasi kesiapan perangkat sebelum pembelajaran dimulai.",
    },
    artifacts: [
      "Perangkat Pembelajaran Instalasi Windows — Dokumen perencanaan pembelajaran yang digunakan sebagai acuan dalam pelaksanaan praktik instalasi Windows di kelas X TKJ.",
      "Dokumentasi Praktik Pembelajaran Terbimbing — Bukti pelaksanaan pembelajaran, pendampingan murid, dan kegiatan praktik instalasi Windows.",
      "Refleksi Pengalaman Praktik Pembelajaran — Catatan refleksi mengenai tantangan pembelajaran, kendala teknis, respons murid, dan rencana perbaikan praktik mengajar.",
    ],
    documents: [
  {
    id: "lk-ppl",
    title: "Lembar Kerja PPL",
    type: "LK",
    description: "Dokumentasi kegiatan dan refleksi pelaksanaan Praktik Pengalaman Lapangan.",
    semester: 1,
    courseSlug: "ppl-terbimbing",
    url: "/documents/semester-1/LK.PPL.pdf",
    downloadName: "LK.PPL.pdf",
    status: "available",
  },
],
  },
];

export default semester1Courses;

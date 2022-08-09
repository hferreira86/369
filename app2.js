
const conteudo = document.querySelector('.conteudo');


subjectName = localStorage.getItem("name");

conteudo.innerHTML = `

<header
        class="relative flex items-center justify-center h-screen overflow-hidden"
      >
        <div
          class="container mx-auto max-w-4xl relative z-30 p-8 text-black bg-purple-400 bg-opacity-50 rounded-xl"
        >
          <h1 class="text-6xl font-black tracking-wider text-center mb-6">
            Hola ${subjectName}<br />Te han seleccionado!
          </h1>
          <p class="text-2xl font-bold text-center mb-6">
            Importante: Mira el video hasta el final con atención que hay una
            sorpresa esperándote al final del video.
          </p>
          <h2 class="text-3xl font-bold text-center mb-6">
            Descubra el poderoso método secreto de manifestación de 3 dígitos de
            Nikola Tesla!
          </h2>
          <p class="text-2xl font-bold text-center mb-6">
            Conocido por ser la llave del universo que abre la puerta a la
            riqueza y abundancia ilimitadas para tu vida en las próximas 24
            horas!
          </p>         
          <div class="container mx-auto flex justify-center">
            <input
            type="submit"
            class="w-full md:w-1/2 border cursor-pointer border-black font-black text-white text-2xl py-4 px-8 rounded-xl"
            value="Compre já."
          />
          </div>
          
        </div>
        <video
          autoplay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="videos/fundo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>

`
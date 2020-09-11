<style>
#v0 {
    position: fixed;
    bottom: 0px;
    right: 0;
    width: 100%;
}

#set-height {
    display: block;
}
</style>       
<section class="video">
            <div id="set-height"></div>

            <video id="v0" tabindex="0" , autobuffer preload>
            <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src="fingers.mp4"></source>
        </video>
        </section>

    <script>
        enterView({
            selector: 'section',
            enter: function(el) {
                el.classList.add('entered');
            }
        })

        var frameNumber = 0, // start video at frame 0
            // lower numbers = faster playback
            playbackConst = 1000,
            // get page height from video duration
            setHeight = document.getElementById("set-height"),
            // select video element         
            vid = document.getElementById('v0');
        // var vid = $('#v0')[0]; // jquery option

        // dynamically set the page height according to video length
        vid.addEventListener('loadedmetadata', function() {
            setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
        });


        // Use requestAnimationFrame for smooth playback
        function scrollPlay() {
            var frameNumber = window.pageYOffset / playbackConst;
            vid.currentTime = frameNumber;
            window.requestAnimationFrame(scrollPlay);
        }

        window.requestAnimationFrame(scrollPlay);
    </script>
<script src="sticky.js"></script>

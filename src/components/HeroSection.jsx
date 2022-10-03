export default function HeroSection() {
   const video =
      "https://rr3---sn-4g5lznlz.googlevideo.com/videoplayback?expire=1664816101&ei=hb86Y_vKLNuAgAemkKYw&ip=156.146.41.194&id=o-AC8QxJt1ejjjWMUHnQ74_2S5-KT50bmGuno3Rb-Q-NBa&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&spc=yR2vp8rOKXstYryGXtNzKZc6wyMqcGc&vprv=1&mime=video%2Fwebm&ns=E4Qm-XNi7LXcFY4yqj6v3tII&gir=yes&clen=31212551&dur=15.000&lmt=1662486580637404&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=4430434&n=xtLWfnrOXdOY1Q&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgLLNlkQ8EkR3ROzboXu1A8QVVDsFVkr6t1EGsoSfSmgMCIQDAVMrJF9JaesFwrgTgtCGwfsgymQhKLu-kqAnnzjrDPA%3D%3D&rm=sn-5hnesz7z&req_id=d585e59a0f58a3ee&ipbypass=yes&cm2rm=sn-ncc-cxbl7e,sn-c0qse7e&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=P5&mip=89.216.16.47&mm=34&mn=sn-4g5lznlz&ms=ltu&mt=1664797020&mv=m&mvi=3&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgJ5hvmEV_rZYUiQnmflgqYgZq8naGeAKd-cJSQhxlv_YCID4vQNnJvGb9VrGTmGh5YQyOhbEGvGnobPm4ndiHAsvc";

   return (
      <div className="hero-section">
         <video
            autoPlay
            muted
            loop
         >
            <source
               src={video}
               type="video/webm"
            />
            Sorry, your browser doesn't support videos.
         </video>
      </div>
   );
}

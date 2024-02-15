const menuA = [
    "기술역량",
    "포트폴리오",
    "프로젝트경험",
    "면접 준비",
    "이력서 작성",
    "학습 스킬",
    "지속적인 학습",
]
const titleA = [
    "주요 기술 스팩에 대한 전문 지식을 소개합니다.",
    "합업 중에 수행한 프로젝트 등을 포함해서 구성했습니다.",
    "협업과 소통 능력을 발휘하여 성공적인 프로젝트 완료한 경험을 갖고 있습니다.",
    "기술적인 능력을 보여주기 위해 이론과 실무에 대한 연습으로 실력을 향상 시켰습니다.",
    "경력 사항과 자각사항 등을 경험에 맞춰서 작성했습니다.",
    "HTML5, JQUERY/AJAX 배웠으며 스프링프레임워크/스프링부터와 SERVLET/JSP SQL/MYBATIS 등 학습 했습니다.",
    "JPA,클라우드데이터베이스 환경,AWS배포등을 학습하였습니다.",
]
$(function () {
    for (let i = 0; i < menuA.length; i++) {
        $("div .menu:eq("+i+")").text(menuA[i]);
    }

    $("nav > div").on("mouseover",function () {
        var num = $(this).index();
        console.log(num)
        $(this)
        $(".title").text(titleA[num]);
    })
});

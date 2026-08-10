function openGame(link) {
    if (!link) {
        alert("该游戏地址暂未录入，敬请等待更新");
        return;
    }
    window.open(link, "_blank");
}

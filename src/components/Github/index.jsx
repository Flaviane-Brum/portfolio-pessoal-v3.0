import React, { useContext } from "react";
import * as S from "./styles";
import { Container } from "../Container";
import { Subtitle } from "../Subtitle";
import {
	FaMapMarkerAlt,
	FaUsers,
	FaUser,
	FaFolderOpen,
	FaLinkedin,
	FaEnvelope,
	FaFolder,
	FaCircle,
	FaRegStar,
	FaGithubAlt,
	FaExternalLinkAlt,
} from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { GithubContext } from "../../context/GithubContext";
import { arrayLanguage } from "../helpers/data";

export const Github = () => {
	const { user, repo, page, hasMoreRepos, setPage } = useContext(GithubContext) || {};

	return (
		<S.Github id="github">
			<Container>
				<Subtitle>Github</Subtitle>
				<S.GithubWrapper>
					<S.GithubContent data-aos="fade-down">
						<S.GithubImageWrapper>
							<S.GithubImage src={user.avatar_url} alt={user.login} />
							<div>
								<h3>{user.login}</h3>
								<p>{user.bio}</p>
							</div>
						</S.GithubImageWrapper>

						<S.GithubInfo>
							<S.GithubList>
								<S.GithubListItem>
									<FaMapMarkerAlt size={14} />
									<span>{user.location}</span>
								</S.GithubListItem>
								<S.GithubListItem>
									<FaUsers size={20} />
									<span>{user.followers} Followers</span>
								</S.GithubListItem>
								<S.GithubListItem>
									<FaUser size={16} />
									<span>{user.following} Following</span>
								</S.GithubListItem>
								<S.GithubListItem>
									<FaLinkedin size={16} />
									<span>
										<a href={user.blog} aria-label="Link para o Linkedin">
											{user.blog}
										</a>
									</span>
								</S.GithubListItem>
								<S.GithubListItem>
									<FaEnvelope size={16} />
									<span>
										<a href={`mailto:${user.email}`} aria-label="Link para o E-mail">
											{user.email}
										</a>
									</span>
								</S.GithubListItem>
								<S.GithubListItem>
									<FaFolderOpen size={16} />
									<span>{user.public_repos} Repositórios</span>
								</S.GithubListItem>
							</S.GithubList>
						</S.GithubInfo>
					</S.GithubContent>

					<S.GithubStatus data-aos="fade-up">
						<img
							height="200"
							align="center"
							src="https://github-readme-stats.vercel.app/api?username=Flaviane-Brum&show_icons=true&hide=contribs&theme=midnight-purple&include_all_commits=true&count_private=false&title_color=a48be9&rank_icon=github&border_color=2e2e2e"
							alt="GitHub stats"
						/>
						<img
							height="200"
							align="center"
							src="https://github-readme-stats.vercel.app/api/top-langs?username=Flaviane-Brum&show_icons=true&theme=midnight-purple&include_all_commits=true&count_private=true&title_color=a48be9&border_color=2e2e2e&layout=compact&langs_count=8"
							alt="Top languages"
						/>
					</S.GithubStatus>
				</S.GithubWrapper>

				<h2>Repositórios</h2>
				<S.GithubRepoList>
					{repo &&
						repo.map((repo) => (
							<S.GithubRepoListItem key={repo.id} data-aos="fade-right">
								<h3>
									<FaFolder size={16} />
									{repo.name}
									<span>
										<small>{repo.visibility}</small>
									</span>
								</h3>
								<p>{repo.description}</p>
								<div className="wrapper">
									<div className="icons">
										<span className="circle">
											{arrayLanguage.map(
												(language) =>
													language.lang === repo.language && (
														<FaCircle
															size={14}
															color={language.bg}
															key={language.id}
														/>
													)
											)}
											<small>{repo.language}</small>
										</span>
										<span>
											<FaRegStar size={14} />
											<small>{repo.stargazers_count}</small>
										</span>
										<span>
											<IoIosGitNetwork size={14} />
											<small>{repo.forks}</small>
										</span>
									</div>
									<div className="links">
										<a
											href={repo.html_url}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaGithubAlt size={16} />
										</a>
										{repo.homepage && (
											<a href={repo.homepage} target="_blank" rel="noopener noreferrer">
												<FaExternalLinkAlt size={16} />
											</a>
										)}
									</div>
								</div>
							</S.GithubRepoListItem>
						))}
				</S.GithubRepoList>

				<S.Pagination>
					<button
						className="btn"
						onClick={() => setPage((page) => Math.max(page - 1, 1))}
						disabled={page === 1}
					>
						Anterior
					</button>
					<button
						className="btn"
						onClick={() => setPage((page) => page + 1)}
						disabled={!hasMoreRepos}
					>
						Próxima
					</button>
				</S.Pagination>
			</Container>
		</S.Github>
	);
};
